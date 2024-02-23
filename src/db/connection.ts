import postgres from "postgres";
import { env } from "../env";

const sql = postgres(env.DATABASE_URL);


async function connectToDatabase(): Promise<void> {
  try {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar-se ao banco de dados:", error);
  } finally {
    await sql.end();
  }
}


export default connectToDatabase();
