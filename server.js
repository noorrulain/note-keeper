import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import { ObjectId } from "bson";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

const url=process.env.MONGO_URL;
mongoose.connect(url);

const noteSchema= new mongoose.Schema({
    title: String,
    content: String
});

const Note = mongoose.model("Note", noteSchema);

app.get("/", async (req, res) => {
    const result = await Note.find();
    res.json(result);
});

app.post("/add", async (req,res) => {
    const title=req.body.title;
    const content=req.body.content;
    //console.log(title);
    await Note.insertMany({title: title, content: content});
    res.send("OK");
});

app.post("/delete" , async (req,res) => {
    const id = req.body.id;
    //console.log(id);
    const objId= new ObjectId(id);
    await Note.deleteMany({_id: objId});
    res.send("OK");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});