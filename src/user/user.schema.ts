import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ type: Types.ObjectId, ref: 'Favorite' })
  favorites: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
