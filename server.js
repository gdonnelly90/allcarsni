const express = require('express');
const connectDB = require('./config/db');
const cars = require('./data/cars');
const app = express();

connectDB();

// initialis emiddleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('AllCarsNI API Running'));

// routes defined
app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/cars', require('./routes/api/cars'));

app.get('/api/cars', (req, res) => {
  res.json(cars);
});

app.get('/api/cars/:id', (req, res) => {
  const car = cars.find((c) => c._id === req.params.id);
  res.json(car);
});

app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`AllCarsNI - Server started on port ${PORT}`)
);
