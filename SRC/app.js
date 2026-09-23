const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
    path: path.resolve(__dirname, "../.env")
});

const app = express();
app.use(express.json());

const userRoute = require("./routes/userRoutes");
const documentRoute = require("./routes/documentRoute");


app.use("/", userRoute);
app.use("/", documentRoute);

// Error Handling Middleware ---------->>>>>>> 
const errMiddleware = require("./middleware/errorHandlingMiddeleware");
app.use(errMiddleware)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`server is running on ${process.env.SERVER_PORT}`);
});