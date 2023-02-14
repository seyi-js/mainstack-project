import { IAppType } from './interface';

export const AppConfig = (): { app: IAppType } => ({
  app: {
    environment: process.env.APP_ENV as IAppType['environment'],
    port: parseInt(process.env.PORT as string, 10) || 3000,
    database: {
      uri: process.env.MONGO_URI as string,
    },
  },
});
