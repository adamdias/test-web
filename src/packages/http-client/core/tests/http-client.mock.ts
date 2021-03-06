import faker from "faker";
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
} from "../http-client";

export const mockHttpResponse = (): any => ({
  data: faker.random.objectElement(),
  status: faker.datatype.number(),
});

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(["get", "post", "put", "delete"]),
  body: faker.random.objectElement(),
  headers: faker.random.objectElement(),
});

export class HttpClientSpy<R = any> implements HttpClient<R> {
  url?: string;

  method?: string;

  body?: any;

  headers?: any;

  params?: any;

  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  };

  async request(data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url;
    this.method = data.method;
    this.body = data.body;
    this.headers = data.headers;
    this.params = data.params;
    return this.response;
  }
}
