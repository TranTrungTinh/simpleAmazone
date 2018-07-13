const mongoose = require('mongoose');

function getDatabaseUri() {
  const dbProduction = 'mongodb://admin:admin123@ds231951.mlab.com:31951/simpleamazone';
  const dbLocal = 'mongodb://localhost:27017/simple-amazon';
  const dbTest = 'mongodb://localhost:27017/simple-amazon-test';
  
  if(process.env.NODE_ENV === 'production') return dbProduction;
  if (process.env.NODE_ENV === 'test') return dbTest;
  return dbLocal;
}

mongoose.Promise = global.Promise;

mongoose.connect(getDatabaseUri(), {useNewUrlParser: true})
.then(() => console.log('Database connected'))
.catch(error => {
  console.log(error.message);
  process.exit(1);
})