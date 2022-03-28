import { FieldValidator } from "../../core/field-validator";
import { Validator } from "../../core/validator";

export class ValidatorComposite implements Validator {
  private constructor(private readonly validators: FieldValidator[]) {}

  static build(validators: FieldValidator[]): ValidatorComposite {
    return new ValidatorComposite(validators);
  }

  validate(fieldName: string, input: object): string {
    const validators = this.validators.filter(v => v.field === fieldName);
    for (const validator of validators) {
      const error = validator.validate(input);
      if (error) {
        return error.message;
      }
    }
  }
}
