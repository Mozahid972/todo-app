const mongoose = require("mongoose");

const dbConnection = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://Hussain:ndkydgWIudUgcZzT@cluster0.emt7qhf.mongodb.net/"
      )
      .then(() => console.log("Database Connection Done"));
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Issue in Db Connection",
      
    });

    process.exit(1);
  }
};
dbConnection();
