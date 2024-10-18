import { DataSource } from "typeorm";
import { configDotenv } from "dotenv";
configDotenv();

export const dataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [__dirname + "/../db/entity/*.ts"],
    migrations: [__dirname + "/../db/migrations/*.ts"],
    synchronize: false
})