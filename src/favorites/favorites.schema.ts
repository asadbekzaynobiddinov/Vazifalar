import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Favorite extends Document {
  @Prop({ required: true, type: Types.ObjectId, ref: 'Album' })
  albumId: string;
}

export const favoriteSchema = SchemaFactory.createForClass(Favorite);
