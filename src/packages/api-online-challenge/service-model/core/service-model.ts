export interface ServiceModel {
  loadAll: () => Promise<ServiceModel.Model[]>;
}

export namespace ServiceModel {
  export type Model = {
    MakeID: number;
    ID: number;
    name: string;
  };
}
