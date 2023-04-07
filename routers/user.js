const users = require("express").Router();
const list_user = [
  {
    id: 1,
    name: "Bambang",
  },
  {
    id: 2,
    name: "Maspin",
  },
];
users.get("/category", (req, res) => {
  const { hoby, profesion } = req.query;
  res.status(200).send({
    message: "success",
    list_user,
    hoby,
    profesion,
  });
});

users.get("/category/:id", (req, res) => {
  const { id } = req.params;
  const findbyID = list_user.find((category) => {
    return (category.id = parseInt(id));
  });
  if (findbyID) {
    res.status(200).send({
      message: "success",
      data: findbyID,
    });
  } else {
    res.status(404).send({
      message: "Gagal Memuat",
    });
  }
});

// users.post("/category", (req, res) => {
//   const body = req.body;
//   res.status(200).send(body);
// });
module.exports = users;
