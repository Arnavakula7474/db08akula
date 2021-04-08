const mongoose = require("mongoose")
const trainSchema = mongoose.Schema({
type: String,
destination: String,
compartments: Number,

})
module.exports = mongoose.model("train", trainSchema)