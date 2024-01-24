const mongoose = require('mongoose')

// we are creating a new mongodb schema which is the document structure
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: String,
  },
  // timestamps true will have details like createdAt and updatedAt timestamps
  {
    timestamps: true,
  },
)

// we are creating a model which means we are creating a collection of Users.
// having a singular and lowercase model name is convenient and it follows convention
const User = mongoose.model('user', userSchema)
module.exports = User
