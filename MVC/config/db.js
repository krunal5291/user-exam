const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(`MongoDB Connected:`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = dbConnect;
