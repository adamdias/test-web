export interface ServiceVersion {
  loadAll: () => Promise<ServiceVersion.Model[]>;
}

export namespace ServiceVersion {
  export type Model = {
    ModelID: number;
    ID: number;
    name: string;
  };
}
