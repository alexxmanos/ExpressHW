// views/page.js

function generateDynamicPage(pageNumber) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Page ${pageNumber}</title>
      </head>
      <body>
        <h1>Page ${pageNumber}</h1>
        <p>This is Page ${pageNumber}.</p>
        <a href="/">Home</a>
      </body>
      </html>
    `;
  }
  
  module.exports = generateDynamicPage;
  