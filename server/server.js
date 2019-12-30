let express = require('express');
require('dotenv').config();
let app = express();

app.use(express.static('build'));
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});