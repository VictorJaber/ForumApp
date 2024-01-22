import express from "express";
import cors from "cors";
import { routes } from "./route";
import { connect } from "./database";

const port = (3000)

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

connect()

app.listen(port, ()=>{
    console.log("Server started on http://localhost:3000")
})