const express = require("express");
const app = express();
app.use(express.json());
const { connection } = require("./config/db");
const {notesRoutes}=require("./Routes/notes.routes")

app.use("/notes",notesRoutes)

app.listen(8500, async () => {
  try {
    await connection;
    console.log("connected");
  } catch {
    console.log(err);
    console.log("connected mongodb");
  }
  console.log("listening on port 8500");
});
