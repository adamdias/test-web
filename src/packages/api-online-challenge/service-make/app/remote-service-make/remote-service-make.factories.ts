import { makeAxiosHttpClient } from "@/packages/http-client";
import { ServiceMake } from "../../core/service-make";
import { RemoteServiceMake } from "./remote-service-make";

export const makeRemoteServiceMake = (baseUrl: string): ServiceMake =>
  new RemoteServiceMake(`${baseUrl}/Make`, makeAxiosHttpClient());
