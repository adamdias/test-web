import { RequiredFieldError } from "@/packages/errors";
import { FieldValidator } from "../../core/field-validator";

export class RequiredFieldValidator implements FieldValidator {
  constructor(readonly field: string) {}

  validate(input: object): Error {
    return input[this.field] ? null : new RequiredFieldError();
  }
}
