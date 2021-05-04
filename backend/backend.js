const express = require('express')
const mongoose = require('mongoose');

const { Schema } = mongoose;

const officeSchema = new Schema({
  address:  String,
  desks: [Number],
  body: String,
  meeting_room: [{ name: String, capacity: Number }],
  accesibility: Boolean,
  beverage: Boolean
});

const reservationSchema = new Schema({
  //todo
});

// Mongoose automatically looks for the plural, lowercased version of your model name
const Office = mongoose.model('Office', officeSchema);
const Reservation = mongoose.model('Reservation', reservationSchema);

mongoose.connect('mongodb://0.0.0.0:27017/project_laboratory', {useNewUrlParser: true, useUnifiedTopology: true});
const app = express()
const port = 3000

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database connected")
});

//Get all office from the database
app.get('/offices', (req, res) => {
  Office.find( {}, function(err, data) {
    if (err) throw err;
    console.log(JSON.stringify(data)); 
    return data;
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
