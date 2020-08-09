const mongoose = require("mongoose");

const weatherSchema = mongoose.Schema({
  location: { type: String, required: true },

});

module.exports = mongoose.model("Weather", weatherSchema);
