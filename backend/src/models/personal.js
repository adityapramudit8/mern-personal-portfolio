import mongoose from "mongoose";

const personalSchema = new mongoose.Schema({
  description: { 
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  }
}, { timestamps: true })

const Personal = mongoose.model("Personal", personalSchema)

export default Personal