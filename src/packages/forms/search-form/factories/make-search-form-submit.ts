import { ServiceVehicles } from "@/packages/api-online-challenge/service-vehicles";
import { SearchFormState } from "../search-form.types";

interface Params {
  event: React.FormEvent<HTMLFormElement>;
  setState: (
    valOrUpdater:
      | SearchFormState
      | ((currVal: SearchFormState) => SearchFormState)
  ) => void;
  state: SearchFormState;
  validate: (field: string, errorIsVisible: boolean) => void;
  loadServiceVehicles: ServiceVehicles;
}

export const makeSearchFormSubmit = async ({
  event,
  validate,
  state,
  setState,
  loadServiceVehicles,
}: Params): Promise<void> => {
  try {
    event.preventDefault();

    if (state.isFormInvalid) {
      validate("location", true);
      validate("km", true);
      return;
    }

    setState(old => ({
      ...old,
      serviceVehicles: {
        isLoading: true,
        results: [],
      },
    }));

    const results = await loadServiceVehicles.loadAll({ Page: 1 });

    setState(old => ({
      ...old,
      serviceVehicles: {
        isLoading: false,
        results,
      },
    }));
  } catch (err) {
    setState(old => ({
      ...old,
      mainError: "Aconteceu um erro inesperado, tente novamente mais tarde",
    }));
  }
};
