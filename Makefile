MOCHA_OPTS= --check-leaks --colors
REPORTER = spec
test: lint
	@echo TRAVIS_JOB_ID $(TRAVIS_JOB_ID)
	@./node_modules/.bin/mocha -b \
	--reporter $(REPORTER) \
	$(MOCHA_OPTS)

lint:
	@./node_modules/.bin/jshint ./lib ./test ./index.js

run-coverage:
	@./node_modules/.bin/istanbul cover -v ./node_modules/.bin/_mocha

coverage: run-coverage
	@./node_modules/.bin/istanbul report html

update-coverage: run-coverage
	@./node_modules/.bin/istanbul report lcovonly
	@./node_modules/.bin/coveralls < coverage/lconv.info

clean:
	rm -fr coverage

.PHONY: test clean
