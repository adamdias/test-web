import { ServiceMake } from "@/packages/api-online-challenge/service-make";
import { SearchFormState } from "../search-form.types";

interface Params {
  setState: (
    valOrUpdater:
      | SearchFormState
      | ((currVal: SearchFormState) => SearchFormState)
  ) => void;
  loadServiceMake: ServiceMake;
}

export const makeRemoteServiceMake = async ({
  setState,
  loadServiceMake,
}: Params): Promise<void> => {
  try {
    setState(old => ({
      ...old,
      serviceMake: {
        ...old.serviceMake,
        isLoading: true,
      },
    }));

    const results = await loadServiceMake.loadAll();

    setState(old => ({
      ...old,
      serviceMake: {
        isLoading: false,
        results,
      },
      serviceModel: {
        isLoading: false,
        results: [],
      },
      serviceVersion: {
        isLoading: false,
        results: [],
      },
      make: String(results[0].ID),
    }));
  } catch (err) {
    setState(old => ({
      ...old,
      serviceMake: {
        ...old.serviceMake,
        isLoading: false,
      },
    }));
  }
};
