const mongoose = require("mongoose");
let auto_increment = require("mongoose-auto-increment");
let connection = mongoose.createConnection(process.env.DB_Connection, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
auto_increment.initialize(connection);

const studentSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
});

studentSchema.plugin(auto_increment.plugin, {
    model: "studntInfo",
    field: "_id",
    startAt: 1,
    incrementBy: 1,
});
mongoose.model("studntInfo", studentSchema);