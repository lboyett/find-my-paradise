const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CostSchema = new Schema({
  city: { type: String, required: true },
  state: { type: String, required: false },
  country: { type: String, required: true },
  costIndex: { type: Number, required: true },
});

// Virtual for book's URL
CostSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/data/cost-indexes/${this._id}`;
});

// Export model
module.exports = mongoose.model("Cost", CostSchema);
