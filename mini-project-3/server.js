const express = require("express");
const app = express();
const userRoute = require("./routes/userRoutes");
//require("dotenv").config();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "mini-project-3"});
});

app.use("/users", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});