let express = require('express');
require('dotenv').config();
let app = express();

app.use(express.static('build'));

app.get('/.well-known/acme-challenge/K_2RjEaeymUHc7iTWe-RdAFQjPLNdCdIuI1B2fnOpyk', (req, res)=>{
  res.send('K_2RjEaeymUHc7iTWe-RdAFQjPLNdCdIuI1B2fnOpyk.8QUstrwiUKpP7oZH0ycw6DC0Y1dZwoHI7v5syvojMU8');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});