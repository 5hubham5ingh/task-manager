import { Schema, model } from "mongoose";

const userSchema = Schema({
    userName: {
        type: Schema.Types.ObjectId,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    workSpaces: [{ type: Schema.Types.ObjectId }]
}, {
    timestamps: true
});

export const User = model('user', userSchema);