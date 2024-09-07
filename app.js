const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000; // Dynamic port assignment

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Routing

// Homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// About Page
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Form handling on homepage
app.post('/submit', (req, res) => {
  const name = req.body.name;
  res.render('submit', { title: 'Form Submission', name: name });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
