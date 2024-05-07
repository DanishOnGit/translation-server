const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.json({msg:'hii'})
})
// POST endpoint to receive translation JSON
app.post('/getTranslation', (req, res) => {
  const {reqLanguage,data} = req.body
  console.log({reqLanguage,data})
  res.json({ message: 'Translation received and saved successfully.' ,reqLanguage,data });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
