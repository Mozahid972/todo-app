const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  body: {
    type: String,
    required: true,
    maxLength: 50,
  },
  user: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
},
{timestamps:true});

module.exports = mongoose.model("list",todoSchema);