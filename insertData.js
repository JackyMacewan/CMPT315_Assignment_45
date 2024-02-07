import dbConnection from "./db/database.js";
import Monster from "./models/monster.model.js";

dbConnection();

const fetchData = async() => {
    const data = await fetch("https://gist.githubusercontent.com/mrchenliang/e438f666d121261b74abcd70a5f938d8/raw/a8f14ee5097fe2ab4f78798307d2dd3dcb0dcd3a/monsters.json");
    const monsters = await data.json();
    for (let i = 0; i < monsters.length; i++) {
        let newMonster = new Monster(monsters[i]);
        newMonster.save();
    }
    console.log("done");
}


fetchData();