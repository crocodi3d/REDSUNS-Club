const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to REDSUNS MC Community!!");
});

app.get("/api", (req, res) => {
    res.json({ message: "connected with Express succesful!"});
});

app.post("/api/add-member", (req, res) => {
    const newMember = req.body.memberName;
    console.log("recieved ne data:", newMember);

    res.json({ message: `saved ${newMember} already!` })
})

app.listen(port, () => {
    console.log("Listening in port " + port);
});