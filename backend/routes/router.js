import express from "express";
import contactModel from "../model/contact.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hi sarfaraz");
});

router.post("/addcontact", async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!(name && email)) {
      console.log("Field are required");
    }
    const existUser = await contactModel.findOne({ email });
    if (existUser) {
      console.log("User Already exist");
      res.status(400).send("Name and email are required");
    }

    await contactModel.create({ name, email });
    res.status(200).send("Contact Added");
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

router.get("/listcontact", async (req, res) => {
  try {
    const response = await contactModel.find();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "contact are not recieved" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const updateContact = await contactModel.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    );
    if (!updateContact) {
      res.status(400).send({ message: "Contact not found" });
    }
    res.status(200).send({ message: "Update successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Data are not Update" });
  }
});

router.delete("/deleteContact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await contactModel.findByIdAndDelete(id);
    res.status(200).send({ message: "delete contact" });
  } catch (error) {
    console.log(error);
    res.status(5000).send({ message: "contact are not delete" });
  }
});

export default router;
