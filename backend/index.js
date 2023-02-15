const express = require("express");
require('dotenv').config()
const cors = require('cors')
const { connection } = require("./config/db");
const {notesRoutes}=require("./Routes/notes.routes")
const {usersRoutes}=require("./Routes/users.routes")
const {authencate}=require("./middleware/authentication")
const app = express();
app.use(express.json());
app.use(cors({
  origin : "*"
}))

app.use("/users",usersRoutes)
// app.use(authencate)
app.use("/notes",notesRoutes)


app.listen(process.env.Port, async () => {
  try {
    await connection;
    console.log("connected");
  } catch {
    console.log(err);
    console.log("connected mongodb");
  }
  console.log("listening on port 8500");
});
