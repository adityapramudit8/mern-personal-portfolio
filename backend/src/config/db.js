import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URL)
    console.log("MONGOOSE CONNECTED SUCESSFULLY!")
  } catch(error) {
    console.log("Error to Connecting Monggo DB", error)
    process.exit(1) // Exit with Failure
  }
}