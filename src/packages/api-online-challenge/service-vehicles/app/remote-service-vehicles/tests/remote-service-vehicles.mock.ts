import faker from "faker";
import { ServiceVehicles } from "../../../core/service-vehicles";
import { RemoteServiceVehicles } from "../remote-service-vehicles";

export const mockRemoteServiceVehicles = (): RemoteServiceVehicles.Model => ({
  ID: faker.datatype.number(),
  Make: faker.vehicle.vehicle(),
  Model: faker.vehicle.model(),
  Version: faker.vehicle.type(),
  Image: faker.image.imageUrl(),
  KM: faker.datatype.number(),
  Price: faker.commerce.price(),
  YearModel: faker.datatype.number(),
  YearFab: faker.datatype.number(),
  Color: faker.vehicle.color(),
});

export const mockRemoteServiceVehiclesListModel =
  (): RemoteServiceVehicles.Model[] => [
    mockRemoteServiceVehicles(),
    mockRemoteServiceVehicles(),
    mockRemoteServiceVehicles(),
  ];

export const mockRemoteServiceVehiclesParams = (): ServiceVehicles.Params => {
  return {
    Page: faker.datatype.number(),
  };
};
