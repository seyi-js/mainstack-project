

export type IEnvironment = 'development' | 'production' | 'test';

export type IAppType = {
    environment: IEnvironment;
    port: number;
    database: {
        uri: string;
    }

}