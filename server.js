const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.get('/', (req, res) => res.send('AllCarsNI API Running'));

// routes defined
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/cars', require('./routes/api/cars'));
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`AllCarsNI - Server started on port ${PORT}`)
);
