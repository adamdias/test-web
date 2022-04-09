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
  errorIsVisible: boolean;
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
  errorIsVisible,
}: Params): void => {
  const validator = makeSearchFormValidator();
  const { location, km } = state;
  const formData = { location: location.value, km: km.value };
  const fieldError = validator.validate(field, formData);

  setState({
    ...state,
    [`${field}`]: {
      ...state[`${field}`],
      error: fieldError || "",
      errorIsVisible: state[`${field}`].errorIsVisible || errorIsVisible,
    },
  });

  setState(old => ({
    ...old,
    isFormInvalid: !!old.location.error || !!old.km.error,
  }));
};
