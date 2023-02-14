const express = require("express");

const app = express();
app.use(express.json());
const { connection } = require("./config/db");
const {notesRoutes}=require("./Routes/notes.routes")
const {usersRoutes}=require("./Routes/users.routes")

app.use("/notes",notesRoutes)
app.use("/users",usersRoutes)

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
