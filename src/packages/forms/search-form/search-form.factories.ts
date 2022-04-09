import {
  ValidatorComposite,
  ValidatorBuilder as Builder,
} from "@/packages/forms/validator";

export const makeSearchFormValidator = (): ValidatorComposite =>
  ValidatorComposite.build([
    ...Builder.field("location").required().build(),
    ...Builder.field("km").required().build(),
  ]);
