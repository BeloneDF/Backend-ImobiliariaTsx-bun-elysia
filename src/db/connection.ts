import postgres from "postgres";
import { env } from "../env";

const sql = postgres(env.DATABASE_URL);


async function connectToDatabase(): Promise<void> {
  try {
    // Não é necessário executar nenhuma consulta específica aqui
    // Apenas estabelecendo a conexão com o banco de dados
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    // Lidando com erros
    console.error("Erro ao conectar-se ao banco de dados:", error);
  } finally {
    // Fechando a conexão com o banco de dados
    await sql.end();
  }
}


export default connectToDatabase();
