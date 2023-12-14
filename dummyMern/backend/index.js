const express = require('express');
const cors = require('cors');
require("dotenv").config();
const dbConnect = require('./config/database');
const routes = require('./router/userRoutes');
const app = express();
const PORT = process.env.PORT || 4000;
const cookieParser = require('cookie-parser');

app.use(cors({
    origin:"*",
}))

app.use(express.json());
app.use(cookieParser());
// mount routes
app.use("/api/v1", routes);


app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);
} )

dbConnect();

app.get("/", (req, res) => {
    res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
  });
  