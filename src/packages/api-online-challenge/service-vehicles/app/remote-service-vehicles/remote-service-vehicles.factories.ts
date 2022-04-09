import { makeAxiosHttpClient } from "@/packages/http-client";
import { ServiceVehicles } from "../../core/service-vehicles";
import { RemoteServiceVehicles } from "./remote-service-vehicles";

export const makeRemoteServiceVehicles = (baseUrl: string): ServiceVehicles =>
  new RemoteServiceVehicles(`${baseUrl}/Vehicles`, makeAxiosHttpClient());
