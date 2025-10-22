import axios from "axios";
const baseUrl = process.env.MICRO1_URL;

export async function getMicro1() {
  if (!baseUrl) throw new Error("MICRO1_URL não configurada");
  const response = await axios.get(baseUrl);
  return response.data;
}
