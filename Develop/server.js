const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

Const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.statuc("public"));

//mongoose.connect
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://lpcalhost/workout',
    {
        userNewURLParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false

    }
);

//routes
app.use(require(".routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
