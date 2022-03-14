import { HttpClient, HttpStatusCode } from "@/packages/http-client";
import { UnexpectedError } from "@/packages/errors";
import { ServiceVersion } from "../../core/service-version";

export class RemoteServiceVersion implements ServiceVersion {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteServiceVersion.Model[]>
  ) {}

  async loadAll(): Promise<ServiceVersion.Model[]> {
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

export namespace RemoteServiceVersion {
  export type Model = ServiceVersion.Model;
}
