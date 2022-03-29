import { makeAxiosHttpClient } from "@/packages/http-client";
import { ServiceModel } from "../../core/service-model";
import { RemoteServiceModel } from "./remote-service-model";

export const makeRemoteServiceModel = (baseUrl: string): ServiceModel =>
  new RemoteServiceModel(`${baseUrl}/Model`, makeAxiosHttpClient());
