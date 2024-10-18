import { DataSource } from "typeorm";
import { configDotenv } from "dotenv";
import { Item } from "./entity/Item";
configDotenv();

export const dataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [Item],
    migrations: [__dirname + "/migrations/*.ts"],
    synchronize: false
})