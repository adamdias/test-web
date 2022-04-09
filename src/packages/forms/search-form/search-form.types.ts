import { ServiceMake } from "@/packages/api-online-challenge/service-make";
import { ServiceModel } from "@/packages/api-online-challenge/service-model";
import { ServiceVersion } from "@/packages/api-online-challenge/service-version";
import { ServiceVehicles } from "@/packages/api-online-challenge/service-vehicles";

export type SearchFormProps = {
  loadServiceMake: ServiceMake;
  loadServiceModel: ServiceModel;
  loadServiceVersion: ServiceVersion;
  loadServiceVehicles: ServiceVehicles;
};

export type SearchFormState = {
  serviceMake: {
    isLoading: boolean;
    results: ServiceMake.Model[];
  };
  serviceModel: {
    isLoading: boolean;
    results: ServiceModel.Model[];
  };
  serviceVersion: {
    isLoading: boolean;
    results: ServiceVersion.Model[];
  };
  serviceVehicles: {
    isLoading: boolean;
    results: ServiceVehicles.Model[];
  };
  isFormInvalid: boolean;
  newState: boolean;
  usedState: boolean;
  location: {
    value: string;
    errorIsVisible: boolean;
    error: string;
  };
  km: {
    value: string;
    errorIsVisible: boolean;
    error: string;
  };
  year: string;
  price: string;
  make: string;
  model: string;
  version: string;
  mainError: string;
};
