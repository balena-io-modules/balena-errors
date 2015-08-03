m = require('mochainon')
errors = require('../lib/errors')

describe 'Errors:', ->

	it 'should expose only Error instances', ->
		for errorName, errorInstance of errors
			m.chai.expect(errorInstance.prototype).to.be.an.instanceof(Error)

	it 'should have a code string equal to the name', ->
		for errorName, errorInstance of errors
			m.chai.expect(errorInstance::code).to.equal(errorName)

	it 'should have number exit codes', ->
		for errorName, errorInstance of errors
			m.chai.expect(errorInstance::exitCode).to.be.a('number')

	it 'should have exit codes not equal to zero', ->
		for errorName, errorInstance of errors
			m.chai.expect(errorInstance::exitCode).to.not.equal(0)
