import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String
})

export default userSchema
