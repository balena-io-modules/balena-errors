import * as m from 'mochainon';
import * as errors from '..';

interface ResinErrorClass {
	prototype: typeof errors.ResinError.prototype;
}

const runForAllErrors = (
	fn: (errorName: string, ErrorClass: ResinErrorClass) => void
) => {
	for (const errorName in errors) {
		if (errors.hasOwnProperty(errorName)) {
			fn(errorName, errors[errorName as keyof typeof errors]);
		}
	}
};

describe('Errors, TS:', function() {
	it('should expose only Error instances', () => {
		runForAllErrors((_errorName, ErrorClass) => {
			m.chai.expect(ErrorClass.prototype).to.be.an.instanceof(Error);
		});
	});

	it('should have a code string equal to the name', () => {
		runForAllErrors((errorName, ErrorClass) => {
			m.chai.expect(ErrorClass.prototype.code).to.equal(errorName);
		});
	});

	it('should have number exit codes', () => {
		runForAllErrors((_errorName, ErrorClass) => {
			m.chai.expect(ErrorClass.prototype.exitCode).to.be.a('number');
		});
	});

	it('should have exit codes not equal to zero', () => {
		runForAllErrors((_errorName, ErrorClass) => {
			m.chai.expect(ErrorClass.prototype.exitCode).to.not.equal(0);
		});
	});
});
