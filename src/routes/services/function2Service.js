import axios from "axios";
const functionUrl = process.env.FUNCTION2_URL;

export async function getFunction2() {
  if (!functionUrl) throw new Error("FUNCTION2_URL não configurada");
  const response = await axios.get(functionUrl);
  return response.data;
}
