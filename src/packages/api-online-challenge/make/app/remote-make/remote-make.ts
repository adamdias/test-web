import { HttpClient, HttpStatusCode } from "@/packages/http-client";
import { UnexpectedError } from "@/packages/errors";
import { MakeList } from "../../core/make";

export class RemoteLoadMakeList implements MakeList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadMakeList.Model[]>
  ) {}

  async loadAll(): Promise<MakeList.Model[]> {
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

export namespace RemoteLoadMakeList {
  export type Model = MakeList.Model;
}
