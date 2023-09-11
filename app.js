const express = require('express');
const app = express();
const port = 3000;

const generateHomePage = require('./views/index');
const generateAboutPage = require('./views/about');
const generateDynamicPage = require('./views/page');

// Sample data
const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10',
];

// Set the content type to HTML
app.set('Content-Type', 'text/html');

// Route for the home page
app.get('/', (req, res) => {
  res.send(generateHomePage(items));
});

// Route for the about page
app.get('/about', (req, res) => {
  res.send(generateAboutPage());
});

// Dynamic routes for pages 1 to 10
for (let i = 1; i <= 10; i++) {
  app.get(`/page${i}`, (req, res) => {
    res.send(generateDynamicPage(i));
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

