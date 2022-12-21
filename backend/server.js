const fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 5002;

app.use(express.json());
app.use(cors());

app.post("/api/layout1", (req, res) => {
  fs.access("./data.json", fs.F_OK, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    let data = fs.readFileSync("./data.json");
    if (data.byteLength > 0) {
      console.log("second");
      let myObj = JSON.parse(data);
      myObj.push(req.body[0]);
      fs.writeFile("./data.json", JSON.stringify(myObj), function (err) {
        if (err) {
          console.log(err.message);
          return res.status(403).send("Data Can Not Be Saved");
        }
      });
      return res.status(200).send("Data Added Successfully");
    } else {
      console.log("first");
      fs.writeFile("./data.json", JSON.stringify(req.body), function (err) {
        if (err) {
          console.log(err.message);
          return res.status(403).send("Data Can Not Be Saved");
        }
      });
      return res.status(200).send("Data Added Successfully");
    }
  });
});

app.post("/api/layout2", (req, res) => {
  var data = fs.readFileSync("./data.json"),
    myObj;
  try {
    myObj = JSON.parse(data);
    return res.status(200).json(myObj);
  } catch (err) {
    return res.status(403).send("Input Data First");
  }
});

app.listen(PORT, (req, res) => {
  console.log(`Listening to the port ${PORT}`);
});