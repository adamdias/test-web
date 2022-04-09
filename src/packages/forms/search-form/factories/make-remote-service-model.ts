import { ServiceModel } from "@/packages/api-online-challenge/service-model";
import { SearchFormState } from "../search-form.types";

interface Params {
  setState: (
    valOrUpdater:
      | SearchFormState
      | ((currVal: SearchFormState) => SearchFormState)
  ) => void;
  state: SearchFormState;
  loadServiceModel: ServiceModel;
}

export const makeRemoteServiceModel = async ({
  setState,
  state,
  loadServiceModel,
}: Params): Promise<void> => {
  try {
    setState(old => ({
      ...old,
      serviceModel: {
        ...old.serviceModel,
        isLoading: true,
      },
      serviceVersion: {
        ...old.serviceVersion,
        isLoading: true,
      },
    }));

    const results = await loadServiceModel.loadAll({
      MakeID: Number(state.make),
    });

    setState(old => ({
      ...old,
      serviceModel: {
        results,
        isLoading: false,
      },
      serviceVersion: {
        results: [],
        isLoading: false,
      },
      model: String(results[0].ID),
    }));
  } catch (err) {
    setState(old => ({
      ...old,
      serviceModel: {
        ...old.serviceModel,
        isLoading: false,
      },
      serviceVersion: {
        ...old.serviceVersion,
        isLoading: false,
      },
    }));
  }
};
