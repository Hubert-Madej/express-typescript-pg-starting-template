import { router } from "./routes/routing";
import express, { Express } from "express";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { errorHandler } from "./middlewares/error-handler.middleware";

AppDataSource.initialize()
  .then(async () => {
    const app: Express = express();
    const port = process.env.APP_PORT;

    app.use(router);
    app.use(errorHandler);

    app.listen(port);

    console.log(`[server]: Running at http://localhost:${port}`);
  })
  .catch((error) => console.log(error));
