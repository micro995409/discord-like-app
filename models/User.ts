import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  avatar: { type: String, default: '' },
  onlineStatus: { type: String, default: 'offline' }
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
