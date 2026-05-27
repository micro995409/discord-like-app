import mongoose from 'mongoose';

const ChannelSchema = new mongoose.Schema({
  serverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Server', required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ['text', 'voice'], default: 'text' }
});

const Channel = mongoose.models.Channel || mongoose.model('Channel', ChannelSchema);
export default Channel;
