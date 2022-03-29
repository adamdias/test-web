export interface ServiceVersion {
  loadAll: (params: ServiceVersion.Params) => Promise<ServiceVersion.Model[]>;
}

export namespace ServiceVersion {
  export type Params = {
    ModelID: number;
  };

  export type Model = {
    ModelID: number;
    ID: number;
    Name: string;
  };
}
