import { makeAxiosHttpClient } from "@/packages/http-client";
import { ServiceVersion } from "../../core/service-version";
import { RemoteServiceVersion } from "./remote-service-version";

export const makeRemoteServiceVersion = (baseUrl: string): ServiceVersion =>
  new RemoteServiceVersion(`${baseUrl}/Version`, makeAxiosHttpClient());
