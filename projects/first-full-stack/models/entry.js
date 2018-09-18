const mongoose = require("mongoose")

const entrySchema = new mongoose.Schema({
    //blueprint for schema
    date: {
        type: Date,
        required: true
    },
    mood: {
        type: String,
        required: true
    },
    activities: Array,
    thoughts: String,
    
    // user: {
    //     type: Schema.types.ObjectID,
    //     ref: "User"
    // }
})

module.exports = mongoose.model("Entry", entrySchema)


// entry: {
    // date: "required",
    // mood: "required",
    // activities: "",
    // thoughts: ""
// }