import pkg from 'pg';
const { Pool  } = pkg;
import dotenv from 'dotenv'

dotenv.config();

const pool = new Pool({
    user:"postgres",
    password: "12345",
    host: "localhost",
    port: 5432,
    database: "mydatabase"
}
)

export default pool;