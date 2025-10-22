import express from "express";
import dotenv from "dotenv";
import routes from "./src/routes/index.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 BFF rodando na porta ${PORT}`);
  console.log("🔗 Variáveis carregadas:", {
    MICRO1_URL: process.env.MICRO1_URL,
    MICRO2_URL: process.env.MICRO2_URL,
    FUNCTION1_URL: process.env.FUNCTION1_URL,
    FUNCTION2_URL: process.env.FUNCTION2_URL
  });
});
