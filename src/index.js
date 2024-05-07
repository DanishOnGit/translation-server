const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());
app.use(cors());
// POST endpoint to receive translation JSON
app.post('/getTranslation', (req, res) => {
  const {reqLanguage,data} = req.body
  console.log({reqLanguage,data})
  res.json({ message: 'Translation received and saved successfully.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
