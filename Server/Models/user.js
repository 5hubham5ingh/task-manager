import { Schema, model } from "mongoose";

const userSchema = Schema({
    userName: {
        type: String,
        min: 2,
        max: 50,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    workspaces: {
        type: [Schema.Types.ObjectId]
    }
}, {
    timestamps: true
});

export const User = model('user', userSchema);