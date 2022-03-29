import faker from "faker";
import { ServiceModel } from "../../../core/service-model";
import { RemoteServiceModel } from "../remote-service-model";

export const mockRemoteServiceModel = (): RemoteServiceModel.Model => ({
  MakeID: faker.datatype.number(),
  ID: faker.datatype.number(),
  Name: faker.company.companyName(),
});

export const mockRemoteServiceModelList = (): RemoteServiceModel.Model[] => [
  mockRemoteServiceModel(),
  mockRemoteServiceModel(),
  mockRemoteServiceModel(),
];

export const mockRemoteServiceModelParams = (): ServiceModel.Params => {
  return {
    MakeID: faker.datatype.number(),
  };
};
