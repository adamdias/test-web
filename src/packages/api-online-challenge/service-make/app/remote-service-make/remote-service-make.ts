import { HttpClient, HttpStatusCode } from "@/packages/http-client";
import { UnexpectedError } from "@/packages/errors";
import { ServiceMake } from "../../core/service-make";

export class RemoteServiceMake implements ServiceMake {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteServiceMake.Model[]>
  ) {}

  async loadAll(): Promise<ServiceMake.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
    });
    const remoteMakes = httpResponse.body || [];
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteMakes.map(remoteMake => ({
          ...remoteMake,
        }));
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteServiceMake {
  export type Model = ServiceMake.Model;
}
