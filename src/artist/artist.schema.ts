import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Artist extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ retuired: true })
  grammy: boolean;
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);
