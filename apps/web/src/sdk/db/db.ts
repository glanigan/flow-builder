import { connect, Connection } from "@planetscale/database";

const databaseConfig = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

let conn: Connection | null = null;

export async function connectToDb() {
  if (conn === null) {
    conn = await connect(databaseConfig);
  }
  return conn;
}

