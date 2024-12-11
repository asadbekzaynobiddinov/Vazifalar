import { Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Track } from './track.schema';
import { Model } from 'mongoose';

@Injectable()
export class TracksService {
  constructor(
    @InjectModel(Track.name) private readonly trackSchema: Model<Track>,
  ) {}
  async create(createTrackDto: CreateTrackDto) {
    const newTrack = new this.trackSchema(createTrackDto);
    return await newTrack.save();
  }

  async findAll() {
    return await this.trackSchema.find();
  }

  async findOne(id: string) {
    return await this.trackSchema.findById(id);
  }

  async update(id: string, updateTrackDto: UpdateTrackDto) {
    return await this.trackSchema.findByIdAndUpdate(id, updateTrackDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.trackSchema.findByIdAndDelete(id);
  }
}
