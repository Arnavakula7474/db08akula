const mongoose = require("mongoose")
const trainSchema = mongoose.Schema({
type: String,
destination: String,
compartments: {
    type: Number,
    min:1,
    max:500
    }

})
module.exports = mongoose.model("train", trainSchema)