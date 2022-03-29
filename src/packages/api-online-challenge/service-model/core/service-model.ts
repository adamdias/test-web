export interface ServiceModel {
  loadAll: (params: ServiceModel.Params) => Promise<ServiceModel.Model[]>;
}

export namespace ServiceModel {
  export type Params = {
    MakeID: number;
  };

  export type Model = {
    MakeID: number;
    ID: number;
    Name: string;
  };
}
