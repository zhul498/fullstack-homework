const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5001;

app.use(express.urlencoded({ extended: true }));

// http://localhost:5001/form should return a form with input elements for username, email, comments, newsletter sign up, and submit button.
app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

// http://localhost:5001/submit should return all the data the user entered
app.post('/submit', (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
