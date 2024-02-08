import Monster from "../models/monster.model.js";

export const getAllMonstersFromRepo = async function() {
    try {
        const monsters = await Monster.find();
        return monsters;
    } catch {
        throw error("Error while fetching monsters");
    }
}

//Contain methods for db CRUD interaction
export const getMonsterFromRepo = async function(query) { //query is an object
    try {
        const monster = await Monster.find(query);
        return monster
    } catch {
        throw error("Error while fetching monster");
    }
}

export const addMonsterToRepo = async function(info) {
    try {
        const addedMonster = new Monster(info);
        const savedMonster = new addedMonster.save(); //save add new document or update existing one.
        return savedMonster;
    } catch (e) {
        throw error("Error while adding monster");
    }
}

export const deleteMonsterFromRepo = async function(query) {
    try {
        const deletedMonster = await Monster.findOneAndDelete({...query})
        return deletedMonster;
    } catch (e) {
        throw error("Error while deleting monster");
    }
}

export const updateMonsterInRepo = async function(query, info) {
    try {
        const updatedMonster = await Monster.findOneAndUpdate(
            {...query},
            {...info},
            { new: true}
            ).lean();
            return updatedMonster;
    } catch (e) {
        throw error("Error while updating monster");
    }
}
