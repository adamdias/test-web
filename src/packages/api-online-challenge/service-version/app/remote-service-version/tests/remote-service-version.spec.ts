import faker from "faker";
import { UnexpectedError } from "@/packages/errors";
import { HttpClientSpy, HttpStatusCode } from "@/packages/http-client";
import { RemoteServiceVersion } from "../remote-service-version";
import {
  mockRemoteServiceVersionListModel,
  mockRemoteServiceVersionParams,
} from "./remote-service-version.mock";

type SutTypes = {
  sut: RemoteServiceVersion;
  httpClientSpy: HttpClientSpy<RemoteServiceVersion.Model[]>;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteServiceVersion.Model[]>();
  const sut = new RemoteServiceVersion(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe("Service version in api-online-challenge", () => {
  test("Should call HttpClient with correct URL and Method", async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);
    const remoteServiceVersionParams = mockRemoteServiceVersionParams();

    await sut.loadAll(remoteServiceVersionParams);
    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe("get");
    expect(httpClientSpy.params).toBe(remoteServiceVersionParams);
  });

  test("Should throw UnexpectedError if HttpClient returns 500", async () => {
    const { sut, httpClientSpy } = makeSut();
    const remoteServiceVersionParams = mockRemoteServiceVersionParams();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const promise = sut.loadAll(remoteServiceVersionParams);
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test("Should return a list of ServiceVersionModels if HttpClient returns 200", async () => {
    const { sut, httpClientSpy } = makeSut();
    const remoteServiceVersionParams = mockRemoteServiceVersionParams();
    const httpResult = mockRemoteServiceVersionListModel();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const versionList = await sut.loadAll(remoteServiceVersionParams);
    expect(versionList).toEqual([
      {
        ModelID: httpResult[0].ModelID,
        ID: httpResult[0].ID,
        name: httpResult[0].name,
      },
      {
        ModelID: httpResult[1].ModelID,
        ID: httpResult[1].ID,
        name: httpResult[1].name,
      },
      {
        ModelID: httpResult[2].ModelID,
        ID: httpResult[2].ID,
        name: httpResult[2].name,
      },
    ]);
  });
});
