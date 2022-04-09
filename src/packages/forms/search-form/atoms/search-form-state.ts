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
    location: {
      value: "",
      error: "",
      errorIsVisible: false,
    },
    km: {
      value: "25",
      error: "",
      errorIsVisible: false,
    },
    isFormInvalid: true,
    newState: true,
    usedState: true,
    year: {
      value: "all",
    },
    price: {
      value: "10000",
    },
    make: {
      value: "",
    },
    model: {
      value: "",
    },
    version: {
      value: "",
    },
    mainError: "",
  } as SearchFormState,
});
