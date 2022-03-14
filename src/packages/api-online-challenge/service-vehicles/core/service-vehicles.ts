export interface ServiceVehicles {
  loadAll: (params: ServiceVehicles.Params) => Promise<ServiceVehicles.Model[]>;
}

export namespace ServiceVehicles {
  export type Params = {
    Page: number;
  };

  export type Model = {
    ID: number;
    Make: string;
    Model: string;
    Version: string;
    Image: string;
    KM: number;
    Price: string;
    YearModel: number;
    YearFab: number;
    Color: string;
  };
}
