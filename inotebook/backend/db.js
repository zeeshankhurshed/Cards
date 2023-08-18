const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://zeeshankhursheed680:<password>@cluster0.lmzxwmi.mongodb.net/'; // Replace 'your-database-name' with the actual name of your database

const connectToMongo = () => {
  mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
    } else {
      console.log('Connected to MongoDB successfully');
    }
  });
};

module.exports = connectToMongo;
