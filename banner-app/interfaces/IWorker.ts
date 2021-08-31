export interface IWorkerItem{
    name: string | undefined;
    status: string | undefined;
    imagePath: string | undefined;
    icon: string | undefined;
}

export interface IWorkerAppState{ 
    workers: IWorkerItem[];
}

export interface IWorkerAppProps {
    description: string | undefined;
  }
  