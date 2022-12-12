// import StudentController
const StudentController = require("../controllers/StudentController");

// import express

const express = require("express");

// membuat object router
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Helo Express");
});

router.get("/students", StudentController.index);

router.post("/students", StudentController.store);

router.put("/students/:id", StudentController.update);

router.delete("/Students/:id", StudentController.destroy);

// export router

module.exports = router;
