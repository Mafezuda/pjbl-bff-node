import express from "express";
import { aggregateData } from "../services/aggregator.js";

const router = express.Router();

router.get("/aggregate", async (req, res) => {
  try {
    const result = await aggregateData();
    res.json(result);
  } catch (error) {
    console.error("Erro na rota /aggregate:", error.message);
    res.status(500).json({ message: "Erro ao agregar dados", error: error.message });
  }
});

export default router;
