const mongoose = require("mongoose");

const DB_CONNECTION = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_Connection, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`DB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = DB_CONNECTION;
