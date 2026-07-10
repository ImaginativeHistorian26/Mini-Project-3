const express = require("express");
require("dotenv").config();
require("./dbConnect");
const app = express();
const userRoute = require("./routes/userRoutes");

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "mini-project-3"});
});

app.use("/users", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});