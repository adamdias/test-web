export interface ServiceMake {
  loadAll: () => Promise<ServiceMake.Model[]>;
}

export namespace ServiceMake {
  export type Model = {
    ID: number;
    name: string;
  };
}
