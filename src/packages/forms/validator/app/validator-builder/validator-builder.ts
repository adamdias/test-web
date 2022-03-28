import { FieldValidator } from "../../core/field-validator";
import { RequiredFieldValidator } from "../required-field-validator";

export class ValidatorBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validations: FieldValidator[]
  ) {}

  static field(fieldName: string): ValidatorBuilder {
    return new ValidatorBuilder(fieldName, []);
  }

  required(): ValidatorBuilder {
    this.validations.push(new RequiredFieldValidator(this.fieldName));
    return this;
  }

  build(): FieldValidator[] {
    return this.validations;
  }
}
