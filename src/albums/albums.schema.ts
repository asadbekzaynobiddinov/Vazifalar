import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Album extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Track' })
  trackId: string;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
