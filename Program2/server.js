const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (HTML)
app.use(express.static(path.join(__dirname)));

// Middleware to parse POST form data
app.use(express.urlencoded({ extended: true }));

// GET method handler
app.get('/submit-get', (req, res) => {
  const name = req.query.name;
  const branch = req.query.branch;
  const semester = req.query.semester;

  const htmlResponse = `
    <h2>Student Information (GET)</h2>
    <p>Name: <b>${name}</b></p>
    <p>Branch: <u>${branch}</u></p>
    <p>Semester: ${semester}</p>
    <br>
    <a href="/">Go Back</a>
  `;

  res.send(htmlResponse);
});

// POST method handler
app.post('/submit-post', (req, res) => {
  const name = req.body.name;
  const branch = req.body.branch;
  const semester = req.body.semester;

  const htmlResponse = `
    <h2>Student Information (POST)</h2>
    <p>Name: <b>${name}</b></p>
    <p>Branch: <u>${branch}</u></p>
    <p>Semester: ${semester}</p>
    <br>
    <a href="/">Go Back</a>
  `;

  res.send(htmlResponse);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`Open browser: http://localhost:3000/index.html`);
});