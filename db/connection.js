import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
},
{
    // this keeps a track of the createdAt and updateAt timestamps
    timestamps: true,
})

const User = new mongoose.model('user', userSchema);

export default User;
