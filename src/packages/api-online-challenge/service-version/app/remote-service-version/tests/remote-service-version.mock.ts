import faker from "faker";
import { RemoteServiceVersion } from "../remote-service-version";

export const mockRemoteServiceVersion = (): RemoteServiceVersion.Model => ({
  ModelID: faker.datatype.number(),
  ID: faker.datatype.number(),
  name: faker.company.companyName(),
});

export const mockRemoteServiceVersionListModel =
  (): RemoteServiceVersion.Model[] => [
    mockRemoteServiceVersion(),
    mockRemoteServiceVersion(),
    mockRemoteServiceVersion(),
  ];
