import {
  ValidatorComposite,
  ValidatorBuilder as Builder,
} from "@/packages/forms/validator";
import { SearchFormState } from "../search-form.types";

interface Params {
  setState: (
    valOrUpdater:
      | SearchFormState
      | ((currVal: SearchFormState) => SearchFormState)
  ) => void;
  state: SearchFormState;
  field: string;
  onSubmit: boolean;
}

const makeSearchFormValidator = (): ValidatorComposite =>
  ValidatorComposite.build([
    ...Builder.field("location").required().build(),
    ...Builder.field("km").required().build(),
  ]);

export const makeSearchFormValidate = ({
  setState,
  state,
  field,
  onSubmit,
}: Params): void => {
  const validator = makeSearchFormValidator();
  const { location, km } = state;
  const formData = { location, km };

  const fieldError = validator.validate(field, formData);

  setState(old => ({
    ...old,
    [`${field}Error`]: onSubmit
      ? fieldError
      : state[field] !== undefined
      ? fieldError
      : undefined,
    [`${field}ErrorOnLoad`]: fieldError,
  }));

  setState(old => ({
    ...old,
    isFormInvalid: !!old.locationErrorOnLoad || !!old.kmErrorOnLoad,
  }));
};
