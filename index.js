import express from "express";
import bodyParser from "body-parser";
import router from "./routes/monsters.route.js";
import dbConnection from "./db/database.js";

const app = express();
const port = 3000;


dbConnection(); //open connection to database
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
    res.status(200).json({ message: "app is running" });
});

app.use("/monsters", router);  // http://localhost:3000/monsters

app.listen(port, function () {
	console.log(`App is listening on port ${port}!`); 
});
