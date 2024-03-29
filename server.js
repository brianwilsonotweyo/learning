const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use the provided port from Heroku or fallback to 3000

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
