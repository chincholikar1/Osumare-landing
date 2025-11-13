const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let formDataList = [];

app.post("/api/form", (req, res) => {
  const { firstName, lastName, gender, language, email } = req.body;
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ message: "All required fields must be filled" });
  }
  const newEntry = { id: formDataList.length + 1, firstName, lastName, gender, language, email };
  formDataList.push(newEntry);
  res.status(201).json({ message: "Form submitted successfully", data: newEntry });
});

app.get("/api/form", (req, res) => {
  res.json(formDataList);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
