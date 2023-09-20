const express = require('express');
const app = express();
const port = 3000; 

app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 

app.get('/', (req, res) => {
  res.render('template1', { title: 'Home Page' });
});

app.get('/about', (req, res) => {
  res.render('template1', { title: 'About Page' });
});

app.get('/contact', (req, res) => {
  res.render('template1', { title: 'Contact Page' });
});

app.get('/page1', (req, res) => {
  res.render('template1', { title: 'Page 1' });
});

app.get('/page2', (req, res) => {
  res.render('template1', { title: 'Page 2' });
});

app.get('/page3', (req, res) => {
  res.render('template2', { title: 'Page 3' });
});

app.get('/page4', (req, res) => {
  res.render('template2', { title: 'Page 4' });
});

app.get('/page5', (req, res) => {
  res.render('template2', { title: 'Page 5' });
});

app.get('/page6', (req, res) => {
  res.render('template2', { title: 'Page 6' });
});

app.get('/page7', (req, res) => {
  res.render('template2', { title: 'Page 7' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


