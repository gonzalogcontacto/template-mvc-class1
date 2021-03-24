import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String }
})

const user = mongoose.model('User', userSchema);
export default user;
