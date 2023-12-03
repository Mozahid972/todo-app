const express = require('express');
const app = express();
const path = require("path");
const cors = require('cors');
require("./config/conn");
const auth = require("./routes/auth");
const list = require("./routes/list");
app.use(express.json());
app.use(cors());

const port = 1000;



app.use("/api/v1", auth);
app.use("/api/v2", list);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "./frontend/todo-app", "build")));
  res.sendFile(path.resolve(__dirname, "./frontend/todo-app", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`app is listing on ${port}`);
});
