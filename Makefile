MOCHA_OPTS= --check-leaks
REPORTER = spec
test:
	$(MAKE) lint
	echo CIRCLE_BUILD_NUM $(CIRCLE_BUILD_NUM)
	@NODE_ENV=testing ./node_modules/.bin/mocha -b \
	--require blanket \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS)

lint:
	./node_modules/.bin/jshint ./lib ./test ./index.js

test-cov:
	$(MAKE) test REPORTER=spec
	$(MAKE) test REPORTER=html-cov 1> coverage.html

test-coveralls:
	$(MAKE) test REPORTER=spec
	$(MAKE) test REPORTER=mocha-lcov-reporter | ./node_modules/coveralls/bin/coveralls.js --verbose
	rm -rf lib-cov

clean:
	rm -f coverage.html
	rm -fr lib-cov

.PHONY: test clean
