import express from "express";
import { getMonsters } from "../controllers/monsters.controller.js"

const router = express.Router();

router.get("/monsters", getMonsters);

export default router;