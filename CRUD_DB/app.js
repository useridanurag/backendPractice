const express = require("express");
const app = express();
const userModel = require("./usermodal");

app.get("/", (req, res) => {
  res.send("Hello.. ji..");
});

app.get("/create", async (req, res) => {
  let createduser = await userModel.create({
    name: "Anu",
    username: "anu",
    email: "anu@mail.com"
  })
  res.send(createduser);
})

app.get("/read", async (req, res) => {
  // let user = await userModel.find({username:"anu"});
  let users = await userModel.find({});
  res.send(users);
})

app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate({ username: "anurag" }, { name: "Anurag Kumar" }, { new: true });
  res.send(updatedUser);
})


app.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({ username: "anu" });
  res.send(users);
})

app.listen(3000);