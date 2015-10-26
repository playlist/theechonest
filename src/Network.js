import request from 'request';

const requestHandler = function requestHandler(callback) {
  return (error, response, body) => {
    if (error) return callback(error, null);

    let data = {};

    try {
      data = JSON.parse(body);
      data = data.response;
    } catch (err) {
      return callback(new Error('Error parsing JSON: ' + body), null);
    }

    if (response.statusCode !== 200) return callback(new Error(data.status.message), null);

    return callback(null, data);
  };
};

export default class Network {
  constructor(echonest) {
    this.echonest = echonest;
  }

  get(uri, callback, anonymous) {
    const requestURI = `${this.echonest.baseUri}${uri}${anonymous ? '' : '&api_key=' + this.echonest.getApiKey()}`;
    request(requestURI, requestHandler(callback));
  }

  post(uri, data, callback, anonymous) {
    if (!anonymous) data.api_key = this.echonest.getApiKey();

    const requestURI = this.echonest.baseUri + uri;

    request({
      uri: requestURI,
      method: 'POST',
      form: data,
    }, requestHandler(callback));
  }

  _filterParams(params, filter) {
    const has = field => params.propertyIsEnumerable(field);
    const get = field => Object.getOwnPropertyDescriptor(params, field);

    return Object.defineProperties({},
      Object.assign({},
        ...(for (p of filter) if (has(p)) {[p]: get(p)})
      )
    );
  }

  _buildQuery(params) {
    return Object.keys(params).map((key) => {
      const value = params[key];
      if (Array.isArray(value)) {
        return key + '=' + value.join('&' + key + '=');
      }
      return key + '=' + value;
    }).join('&');
  }
}
