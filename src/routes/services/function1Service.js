import axios from "axios";
const functionUrl = process.env.FUNCTION1_URL;

export async function createFunction1(data = { teste: "ok" }) {
  if (!functionUrl) throw new Error("FUNCTION1_URL não configurada");
  const response = await axios.post(functionUrl, data);
  return response.data;
}
