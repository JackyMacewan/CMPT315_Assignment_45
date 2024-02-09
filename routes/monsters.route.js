import express from "express";
import { getAllMonsters, getMonster, deleteMonster, updateMonster, createMonster } from "../controllers/monsters.controller.js"

/**
 * Middle for validating route 
 * @param {*} next - call the next function in succession, in this case it will be the controller function.
 */
const routeValidation = (req, res, next) => {
    const { body } = req;
    console.log(body);
    next(); //call the next function
}

const router = express.Router();

router.get("/", getAllMonsters);
router.get("/:id", getMonster);
router.delete("/:id", deleteMonster);
router.patch("/:id",updateMonster); //put will replace the document completely, patch replace only the field that is needed
router.post("/", createMonster);

export default router;