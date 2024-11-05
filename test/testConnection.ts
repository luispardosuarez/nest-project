import { createConnection } from 'mysql2/promise'; // Cambia a esta importación
import * as dotenv from 'dotenv';

dotenv.config();

async function connectToDatabase() {
  const connection = await createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  console.log('Connected to MySQL');
  await connection.end();
}

connectToDatabase().catch(console.error);
