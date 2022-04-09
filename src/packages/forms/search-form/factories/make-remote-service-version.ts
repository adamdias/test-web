import { ServiceVersion } from "@/packages/api-online-challenge/service-version";
import { SearchFormState } from "../search-form.types";

interface Params {
  setState: (
    valOrUpdater:
      | SearchFormState
      | ((currVal: SearchFormState) => SearchFormState)
  ) => void;
  state: SearchFormState;
  loadServiceVersion: ServiceVersion;
}

export const makeRemoteServiceVersion = async ({
  setState,
  state,
  loadServiceVersion,
}: Params): Promise<void> => {
  try {
    setState(old => ({
      ...old,
      serviceVersion: {
        ...old.serviceVersion,
        isLoading: true,
      },
    }));

    const results = await loadServiceVersion.loadAll({
      ModelID: Number(state.model),
    });

    setState(old => ({
      ...old,
      serviceVersion: {
        isLoading: false,
        results,
      },
      version: String(results[0].ID),
    }));
  } catch (err) {
    setState(old => ({
      ...old,
      serviceVersion: {
        ...old.serviceVersion,
        isLoading: false,
      },
    }));
  }
};
