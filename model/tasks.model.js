import {model, Schema} from 'mongoose';

const taskSchema = new Schema({
  title: String,
  description: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
});

export const Tasks = model('Task', taskSchema);
