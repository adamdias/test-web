import { FieldValidator } from "../field-validator";

export class FieldValidatorSpy implements FieldValidator {
  error: Error = null;

  constructor(readonly field: string) {}

  validate(): Error {
    return this.error;
  }
}
