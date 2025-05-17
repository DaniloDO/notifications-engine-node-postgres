import express from "express"; 
import dotenv from "dotenv"; 

import postgresClient from "./src/database/config/postgresClient.js";
import usersRouter from "./src/routes/usersRoutes.js";
import postsRouter from "./src/routes/postsRoutes.js";

const app = express(); 
const environment = process.env.NODE_ENV || "development"; 

dotenv.config({path: `.${environment}.env`}); 
console.log(`environment: ${environment}`); 

const port = process.env.PORT || 3000; 

postgresClient; 

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use("/api/users", usersRouter); 
app.use("/api/posts", postsRouter);

app.set("json spaces", 2); 

app.get("/", (req, res) => {
    res.status(200).json({message: "notifications-engine running."});
}); 

process.on("SIGINT", async () => {
    console.log("Shutting down server"); 
    process.exit(0); 
});

app.listen(port, () => console.log(`Listening on port: ${port}`)); 