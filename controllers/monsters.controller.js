import { getAllMonstersFromRepo, getMonsterFromRepo, addMonsterToRepo, deleteMonsterFromRepo, updateMonsterInRepo } from "../repository/monster.repository.js";

//Controller for monsters, Following MVC model (encapsulation).

/*
    Method get all monsters in database
*/
export const getMonsters = async function(req, res, next) {
    try {
        const monsters = await getAllMonstersFromRepo();
        res.status(200).json({ status: 200, "monsters": monsters}); //200 = success
    } catch {
        res.status(400).json({ status: 400, message: e.message })
    }
}


/**
 * Method takes in user request, convert it into query and pass it to the repo methods.
 * return to the user the requested monster info or an error message
 * @param {*} req - user request
 * @param {*} res - response send back to the user
 * @param {*} next - function that calls in the next middleware (if there is any).
 */
export const getMonster = async function (req, res, next) {
    try 
    {
        const query = {};
        const monster = await getMonsterFromRepo({...query});
        res.json({
            data: calories 
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
}