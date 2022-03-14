import faker from "faker";
import { UnexpectedError } from "@/packages/errors";
import { HttpClientSpy, HttpStatusCode } from "@/packages/http-client";
import { RemoteServiceMake } from "../remote-service-make";
import { mockRemoteServiceMakeListModel } from "./remote-service-make.mock";

type SutTypes = {
  sut: RemoteServiceMake;
  httpClientSpy: HttpClientSpy<RemoteServiceMake.Model[]>;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteServiceMake.Model[]>();
  const sut = new RemoteServiceMake(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe("Service make in api-online-challenge", () => {
  test("Should call HttpClient with correct URL and Method", async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);

    await sut.loadAll();
    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe("get");
  });

  test("Should throw UnexpectedError if HttpClient returns 500", async () => {
    const { sut, httpClientSpy } = makeSut();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const promise = sut.loadAll();
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test("Should return a list of ServiceMakeModel if HttpClient returns 200", async () => {
    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockRemoteServiceMakeListModel();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const makeList = await sut.loadAll();
    expect(makeList).toEqual([
      {
        ID: httpResult[0].ID,
        name: httpResult[0].name,
      },
      {
        ID: httpResult[1].ID,
        name: httpResult[1].name,
      },
      {
        ID: httpResult[2].ID,
        name: httpResult[2].name,
      },
    ]);
  });
});
