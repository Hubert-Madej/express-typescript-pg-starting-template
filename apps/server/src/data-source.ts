import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.APP_DB_HOST,
  port: Number(process.env.APP_DB_PORT),
  username: process.env.APP_DB_USERNAME,
  password: process.env.APP_DB_PASSWORD,
  database: process.env.APP_DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: [
    `./${
      process.env.APP_ENV === "prod" ? "dist" : "src"
    }/entities/**/*.entity.{ts,js}`,
  ],
  migrations: [
    `./${
      process.env.APP_ENV === "prod" ? "dist" : "src"
    }/migrations/**/*.{ts,js}`,
  ],
  subscribers: [
    `./${
      process.env.APP_ENV === "prod" ? "dist" : "src"
    }/subscribers/**/*.subscriber.{ts,js}`,
  ],
});
