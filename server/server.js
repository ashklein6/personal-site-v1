
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// route for SSL
router.get('/.well-known/acme-challenge/GsKqG4-I874ezq9PLRam6OdIxn6oRlL_uIMEwt6dNJw', (req,res) => {
  res.send('GsKqG4-I874ezq9PLRam6OdIxn6oRlL_uIMEwt6dNJw.8_Ho_ShpHwFZR4xuG7IliygeCybwky4eyeVUXvXCDpo')
})

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
