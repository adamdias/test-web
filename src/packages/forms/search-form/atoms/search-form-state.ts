import { atom } from "recoil";
import { SearchFormState } from "../search-form.types";

export const searchFormState = atom({
  key: "searchFormState",
  default: {
    serviceMake: {
      isLoading: false,
      results: [],
    },
    serviceModel: {
      isLoading: false,
      results: [],
    },
    serviceVersion: {
      isLoading: false,
      results: [],
    },
    serviceVehicles: {
      isLoading: false,
      results: [],
    },
    isFormInvalid: true,
    newState: false,
    usedState: false,
    location: undefined,
    locationError: undefined,
    locationErrorOnLoad: undefined,
    km: "25",
    kmError: undefined,
    kmErrorOnLoad: undefined,
    year: "all",
    price: "10000",
    make: undefined,
    model: undefined,
    version: undefined,
    mainError: undefined,
  } as SearchFormState,
});
