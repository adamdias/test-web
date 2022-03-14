import faker from "faker";
import { RemoteServiceModel } from "../remote-service-model";

export const mockRemoteServiceModel = (): RemoteServiceModel.Model => ({
  MakeID: faker.datatype.number(),
  ID: faker.datatype.number(),
  name: faker.company.companyName(),
});

export const mockRemoteServiceModelList = (): RemoteServiceModel.Model[] => [
  mockRemoteServiceModel(),
  mockRemoteServiceModel(),
  mockRemoteServiceModel(),
];
