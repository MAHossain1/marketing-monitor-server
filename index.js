const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;

app.use(cors());

const courses = require("./data/courses.json");

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find(c => c.id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`Running MarketingMentor server on port ${port}`);
});
