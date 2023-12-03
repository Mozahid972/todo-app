const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    maxLength: 50,
  },
  username: {
    type: String,
    required: true,
    maxLength: 50,
  },

  password: {
    type: String,
    required: true,
    maxLength: 100,
    },
    list: [{
        type: mongoose.Types.ObjectId,
        ref:"list",
        
  },]
});

module.exports = mongoose.model("User", userSchema);
