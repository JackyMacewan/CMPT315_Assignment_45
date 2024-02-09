import Monster from "../models/monster.model.js";

export const getAllMonstersFromRepo = async () => {
    try {
        const monsters = await Monster.find();
        return monsters;
    } catch {
        throw Error("Error while fetching monsters");
    }
}

//Contain methods for db CRUD interaction
export const getMonsterFromRepo = async (query) => { //query is an object
    try {
        const monster = await Monster.find(query);
        return monster;
    } catch {
        throw Error("Error while fetching monster");
    }
}

/**
 * Create new monster and add it to db
 */
export const addMonsterToRepo = async (info) => {
    const maxID = await Monster.find().sort({"id": -1}).limit(1); //get the highest ID value
    info["id"] = maxID[0].id + 1; //makes sure all field are filled to add it in
    info["image_url"] = `https://robohash.org/${info.id}?set=set2&size =15x15`;
    try {
        const addedMonster = new Monster(info); 
        const savedMonster = addedMonster.save();
        return savedMonster;
    } catch (e) {
            throw Error("Error while adding monster");
    }
}

export const deleteMonsterFromRepo = async (query) => {
    try {
        const deletedMonster = await Monster.findOneAndDelete({...query})
        return deletedMonster;
    } catch (e) {
        throw Error("Error while deleting monster");
    }
}

export const updateMonsterInRepo = async (query, info) => {
    try {
        const updatedMonster = await Monster.findOneAndUpdate(
            {...query},
            {...info},
            { new: true}
            ).lean();
            return updatedMonster;
    } catch (e) {
        throw Error("Error while updating monster");
    }
}
