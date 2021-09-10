import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));

const handleListener = () => console.log("Listening on port 3000");
app.listen(3000, handleListener);
