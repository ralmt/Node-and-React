const mongoose = require("mongoose");

const { Schema } = mongoose;

const producModel = new Schema(
  {
    name: { type: String, default: 'nothing' },
    purchased: { type: Boolean, default: false }
  },
  {collection: 'products'}
)

module.exports = mongoose.model("products", producModel);