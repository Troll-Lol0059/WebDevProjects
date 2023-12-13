const express = require('express');
const cors = require('cors');
require("dotenv").config();
const dbConnect = require('./config/database');
const routes = require('./router/userRoutes');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin:"*",
}))

app.use(express.json());
// mount routes
app.use("/api/v1", routes);


app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);
} )

dbConnect();

app.get("/", (req, res) => {
    res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
  });
  