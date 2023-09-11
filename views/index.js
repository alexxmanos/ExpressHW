// views/index.js

function generateHomePage(items) {
    let html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Home Page</title>
      </head>
      <body>
        <h1>Welcome to the Home Page</h1>
        <ul>
    `;
  
    items.forEach((item, index) => {
      html += `<li><a href="/page${index + 1}">${item}</a></li>`;
    });
  
    html += `
        </ul>
        <a href="/about">About</a>
      </body>
      </html>
    `;
  
    return html;
  }
  
  module.exports = generateHomePage;
  
