import faker from "faker";
import { UnexpectedError } from "@/packages/errors";
import { HttpClientSpy, HttpStatusCode } from "@/packages/http-client";
import { RemoteServiceModel } from "../remote-service-model";
import {
  mockRemoteServiceModelList,
  mockRemoteServiceModelParams,
} from "./remote-service-model.mock";

type SutTypes = {
  sut: RemoteServiceModel;
  httpClientSpy: HttpClientSpy<RemoteServiceModel.Model[]>;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteServiceModel.Model[]>();
  const sut = new RemoteServiceModel(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe("Service model in api-online-challenge", () => {
  test("Should call HttpClient with correct URL and Method", async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);
    const remoteServiceModelParams = mockRemoteServiceModelParams();

    await sut.loadAll(remoteServiceModelParams);
    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe("get");
    expect(httpClientSpy.params).toBe(remoteServiceModelParams);
  });

  test("Should throw UnexpectedError if HttpClient returns 500", async () => {
    const { sut, httpClientSpy } = makeSut();
    const remoteServiceModelParams = mockRemoteServiceModelParams();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const promise = sut.loadAll(remoteServiceModelParams);
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test("Should return a list of ServiceModels if HttpClient returns 200", async () => {
    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockRemoteServiceModelList();
    const remoteServiceModelParams = mockRemoteServiceModelParams();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const modelList = await sut.loadAll(remoteServiceModelParams);
    expect(modelList).toEqual([
      {
        MakeID: httpResult[0].MakeID,
        ID: httpResult[0].ID,
        Name: httpResult[0].Name,
      },
      {
        MakeID: httpResult[1].MakeID,
        ID: httpResult[1].ID,
        Name: httpResult[1].Name,
      },
      {
        MakeID: httpResult[2].MakeID,
        ID: httpResult[2].ID,
        Name: httpResult[2].Name,
      },
    ]);
  });
});
