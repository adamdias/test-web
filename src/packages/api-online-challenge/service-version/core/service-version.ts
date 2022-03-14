export interface ServiceVersion {
  loadAll: (params: ServiceVersion.Params) => Promise<ServiceVersion.Model[]>;
}

export namespace ServiceVersion {
  export type Params = {
    MakeID: number;
  };

  export type Model = {
    ModelID: number;
    ID: number;
    name: string;
  };
}
