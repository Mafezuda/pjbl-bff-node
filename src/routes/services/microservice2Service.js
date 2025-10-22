import axios from "axios";
const baseUrl = process.env.MICRO2_URL;

export async function getMicro2() {
  if (!baseUrl) throw new Error("MICRO2_URL não configurada");
  const response = await axios.get(baseUrl);
  return response.data;
}
