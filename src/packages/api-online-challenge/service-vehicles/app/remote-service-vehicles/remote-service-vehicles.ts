import { HttpClient, HttpStatusCode } from "@/packages/http-client";
import { UnexpectedError } from "@/packages/errors";
import { ServiceVehicles } from "../../core/service-vehicles";

export class RemoteServiceVehicles implements ServiceVehicles {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteServiceVehicles.Model[]>
  ) {}

  async loadAll(
    params: ServiceVehicles.Params
  ): Promise<ServiceVehicles.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
      params,
    });
    const remoteVehicles = httpResponse.body || [];
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteVehicles.map(remoteVehicle => ({
          ...remoteVehicle,
        }));
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteServiceVehicles {
  export type Model = ServiceVehicles.Model;
}
