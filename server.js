const express = require('express');
const connectDB = require('./config/db');
const path = require("path")

const app = express();

connectDB()

app.use(express.json({extended:false}))


app.use('/api/users/', require('./routes/users'))
app.use('/api/auth/', require('./routes/auth'))
app.use('/api/coins/', require('./routes/coins'))

if(process.env.NODE_ENV === "production"){
    app.use(express.static("exofrontend"));

    app.get("*", (req, resp) => resp.sendFile(path.resolve(__dirname, "exofrontend", "build")))
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));