import { getAllMonstersFromRepo, getMonsterFromRepo, addMonsterToRepo, deleteMonsterFromRepo, updateMonsterInRepo } from "../repository/monster.repository.js";

//Controller for monsters, Following MVC model (encapsulation).

/*
    Method get all monsters in database
*/
export const getAllMonsters = async (req, res) => {
    try {
        const monsters = await getAllMonstersFromRepo();
        //res.status(200).json({ status: 200, "monsters": monsters}); //200 = success
        res.status(200).send(monsters)
    } catch (e) {
        //res.status(400).json({ status: 400, message: e.message })
        res.status(500).send(e.message, 'Unable to retrieve list of monsters')
    }
}

/**
 * Method takes in user request, convert it into query and pass it to the repo methods.
 * return to the user the requested monster info or an error message
 * @param {*} req - user request
 * @param {*} res - response send back to the user
 * @param {*} next - function that calls in the next middleware (if there is any).
 */
export const getMonster = async (req, res, next) => {
    const { id } = req.params;
    try 
    {
        const monster = await getMonsterFromRepo({id: id});
        res.status(200).send(monster);
    } catch (e) {
        res.status(500).send(e.message, `Unable to retrieve monster with id ${id}`)
    }
}

/**
 * Delete monster from repo based on ID
 */
export const deleteMonster = async (req, res) => {
    const { id } = req.params;
    try 
    {
        const monster = await deleteMonsterFromRepo({id: id});
        if (monster) { 
            res.status(200).send(monster);
        } else {
            res.status(404).send(e.message, `No monster with id ${id}`)
        }
       
    } catch (e) {
        res.status(500).send(e.message, `Unable to delete monster with id ${id}`)
    }
}

/*
 * Update monster info in repo using id
 */
export const updateMonster = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try 
    {
        const monster = await updateMonsterInRepo({id: id}, body);
        res.status(200).send(monster);
    } catch (e) {
        res.status(500).send(e.message, `Unable to retrieve monster with id ${id}`)
    }
}

export const createMonster = async (req, res) => {
    const { body } = req;
    try 
    {
        const monster = await addMonsterToRepo(body);
        res.status(200).send(monster);
    } catch (e) {
        res.status(500).send(e.message, `Unable to create monster`)
    }
}