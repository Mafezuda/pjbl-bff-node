import { getMicro1 } from "./microservice1Service.js";
import { getMicro2 } from "./microservice2Service.js";
import { createFunction1 } from "./function1Service.js";
import { getFunction2 } from "./function2Service.js";

export async function aggregateData() {
  try {
    const [micro1, micro2, func2] = await Promise.all([
      getMicro1(),
      getMicro2(),
      getFunction2()
    ]);

    return {
      origem: "BFF",
      status: "Dados agregados com sucesso!",
      micro1,
      micro2,
      func2
    };
  } catch (error) {
    console.error("Erro ao agregar dados:", error.message);

    // Fallback simulando dados locais para testes
    return {
      origem: "BFF",
      status: "Sem conexão com microserviços",
      micro1: [{ id: 1, nome: "Simulado A" }],
      micro2: [{ id: 2, nome: "Simulado B" }],
      func2: [{ mensagem: "Função não disponível" }]
    };
  }
}
