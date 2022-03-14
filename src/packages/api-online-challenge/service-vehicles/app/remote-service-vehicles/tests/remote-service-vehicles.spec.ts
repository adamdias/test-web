import faker from "faker";
import { UnexpectedError } from "@/packages/errors";
import { HttpClientSpy, HttpStatusCode } from "@/packages/http-client";
import { RemoteServiceVehicles } from "../remote-service-vehicles";
import {
  mockRemoteServiceVehiclesListModel,
  mockRemoteServiceVehiclesParams,
} from "./remote-service-vehicles.mock";

type SutTypes = {
  sut: RemoteServiceVehicles;
  httpClientSpy: HttpClientSpy<RemoteServiceVehicles.Model[]>;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteServiceVehicles.Model[]>();
  const sut = new RemoteServiceVehicles(url, httpClientSpy);
  return {
    sut,
    httpClientSpy,
  };
};

describe("Service vehicles in api-online-challenge", () => {
  test("Should call HttpClient with correct URL, params and Method", async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);
    const remoteServiceVehiclesParams = mockRemoteServiceVehiclesParams();

    await sut.loadAll(remoteServiceVehiclesParams);
    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe("get");
    expect(httpClientSpy.params).toBe(remoteServiceVehiclesParams);
  });

  test("Should throw UnexpectedError if HttpClient returns 500", async () => {
    const { sut, httpClientSpy } = makeSut();
    const remoteServiceVehiclesParams = mockRemoteServiceVehiclesParams();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };

    const promise = sut.loadAll(remoteServiceVehiclesParams);
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test("Should return a list of ServiceVehiclesModels if HttpClient returns 200", async () => {
    const { sut, httpClientSpy } = makeSut();
    const remoteServiceVehiclesParams = mockRemoteServiceVehiclesParams();
    const httpResult = mockRemoteServiceVehiclesListModel();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };

    const versionList = await sut.loadAll(remoteServiceVehiclesParams);
    expect(versionList).toEqual([
      {
        ID: httpResult[0].ID,
        Make: httpResult[0].Make,
        Model: httpResult[0].Model,
        Version: httpResult[0].Version,
        Image: httpResult[0].Image,
        KM: httpResult[0].KM,
        Price: httpResult[0].Price,
        YearModel: httpResult[0].YearModel,
        YearFab: httpResult[0].YearFab,
        Color: httpResult[0].Color,
      },
      {
        ID: httpResult[1].ID,
        Make: httpResult[1].Make,
        Model: httpResult[1].Model,
        Version: httpResult[1].Version,
        Image: httpResult[1].Image,
        KM: httpResult[1].KM,
        Price: httpResult[1].Price,
        YearModel: httpResult[1].YearModel,
        YearFab: httpResult[1].YearFab,
        Color: httpResult[1].Color,
      },
      {
        ID: httpResult[2].ID,
        Make: httpResult[2].Make,
        Model: httpResult[2].Model,
        Version: httpResult[2].Version,
        Image: httpResult[2].Image,
        KM: httpResult[2].KM,
        Price: httpResult[2].Price,
        YearModel: httpResult[2].YearModel,
        YearFab: httpResult[2].YearFab,
        Color: httpResult[2].Color,
      },
    ]);
  });
});
