const express =  require('express');
const parser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

require('./helpers/connectDatabase');

app.get('/', (req, res) => {
  res.send({name: 'John'});
})

app.listen(3030, () => console.log('Server started'));