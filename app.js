const express = require("express");
const bodyParser = require("body-parser");
const users = require("./routers/user.js");
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(users);
app.use("/", (req, res) => {
  res.status(200).send({
    message: "Hello",
    user: "Arif",
  });
});

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
