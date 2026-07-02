const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    console.log("New Contact Form");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.json({
        success: true,
        message: "Message received successfully!"
    });
});
app.use(express.static(__dirname));
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});