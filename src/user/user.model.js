import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});

export const User = Mongoose.model('User', userSchema);