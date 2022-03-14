export interface MakeList {
  loadAll: () => Promise<MakeList.Model[]>;
}

export namespace MakeList {
  export type Model = {
    ID: number;
    name: string;
  };
}
