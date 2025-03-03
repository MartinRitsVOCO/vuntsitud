const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const apiRoutes = require('./routes/api');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

// Serve static files with correct MIME types
app.use(express.static('frontend/dist', {
    setHeaders: (res, path) => {
      if (path.endsWith('.js')) {
        res.set('Content-Type', 'application/javascript');
      } else if (path.endsWith('.jsx')) {
        res.set('Content-Type', 'application/javascript');
      }
    }
  }));
  
  // Handle React routing
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});