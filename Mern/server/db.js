const mongosse = require("mongoose");

const Connection = async () => {
  try {
    await mongosse.connect(
      "mongodb+srv://chat-app:Jh6kJyQE5AAYkTEC@cluster1.hfwjp.mongodb.net/"
    );
    console.log("Connection on");
  } catch (error) {
    console.log("Connection of", error.message);
  }
};
module.exports = Connection
