import faker from "faker";
import { RemoteServiceMake } from "../remote-service-make";

export const mockRemoteServiceMakeModel = (): RemoteServiceMake.Model => ({
  ID: faker.datatype.number(),
  Name: faker.company.companyName(),
});

export const mockRemoteServiceMakeListModel = (): RemoteServiceMake.Model[] => [
  mockRemoteServiceMakeModel(),
  mockRemoteServiceMakeModel(),
  mockRemoteServiceMakeModel(),
];
