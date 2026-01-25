const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: { type: String, require: true },
    surname: { type: String, require: true },
    sex: { type: CharacterData, require: true },
    status: { type: String, require: true },
    phone: { type: String}
})

const Members = mongoose.model("Members", memberSchema);
export default Members;