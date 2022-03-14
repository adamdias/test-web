import faker from "faker";
import { RemoteLoadMakeList } from "../remote-make";

export const mockRemoteMakeModel = (): RemoteLoadMakeList.Model => ({
  ID: faker.datatype.number(),
  name: faker.company.companyName(),
});

export const mockRemoteMakeListModel = (): RemoteLoadMakeList.Model[] => [
  mockRemoteMakeModel(),
  mockRemoteMakeModel(),
  mockRemoteMakeModel(),
];
