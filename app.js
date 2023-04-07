const express = require("express");
const users = require("./routers/user.js");
const app = express();
const PORT = 3000;

app.use(users);
app.use("/", (req, res) => {
  res.status(200).send({
    message: "Hello",
    user: "Arif",
  });
});

app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
