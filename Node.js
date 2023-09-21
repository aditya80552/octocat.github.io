const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint for handling crime reports.
app.post("/reportCrime", (req, res) => {
    const { crimeType, description } = req.body;

    // Implement your logic to store the crime report in a database or perform necessary actions.
    // For simplicity, we'll just log the report in this example.
    console.log("Crime Type:", crimeType);
    console.log("Description:", description);

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
