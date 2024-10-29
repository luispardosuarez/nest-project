import { CatModel } from "src/cat_api/domain/entities/catmodel.entity";
import { DataSource } from "typeorm";

export const databaseConfig = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST || 'localhost',
  port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [CatModel],
  synchronize: true,
})
