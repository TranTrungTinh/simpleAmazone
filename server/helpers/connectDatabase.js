const mongoose = require('mongoose');

function getDatabaseUri() {
  return 'mongodb://admin:admin123@ds231951.mlab.com:31951/simpleamazone';
}

mongoose.Promise = global.Promise;

mongoose.connect(getDatabaseUri(), {useNewUrlParser: true})
.then(() => console.log('Database connected'))
.catch(error => {
  console.log(error.message);
  process.exit(1);
})