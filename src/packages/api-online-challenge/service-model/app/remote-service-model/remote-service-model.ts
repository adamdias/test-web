import { HttpClient, HttpStatusCode } from "@/packages/http-client";
import { UnexpectedError } from "@/packages/errors";
import { ServiceModel } from "../../core/service-model";

export class RemoteServiceModel implements ServiceModel {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteServiceModel.Model[]>
  ) {}

  async loadAll(params: ServiceModel.Params): Promise<ServiceModel.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
      params,
    });
    const remoteModels = httpResponse.body || [];
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteModels.map(remoteModel => ({
          ...remoteModel,
        }));
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteServiceModel {
  export type Model = ServiceModel.Model;
}
