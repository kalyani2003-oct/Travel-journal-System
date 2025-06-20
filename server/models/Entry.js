import mongoose from "mongoose";

const EntrySchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        title: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true
        },
        photos: {
            type: [String],
        },
        text: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        }
    }
)

export default mongoose.model("Entry", EntrySchema)
