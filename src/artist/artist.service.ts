import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Artist } from './artist.schema';
import { Model } from 'mongoose';

@Injectable()
export class ArtistService {
  constructor(
    @InjectModel(Artist.name) private readonly artistModel: Model<Artist>,
  ) {}
  async create(createArtistDto: CreateArtistDto) {
    const newArtist = new this.artistModel(createArtistDto);
    return await newArtist.save();
  }

  async findAll() {
    return await this.artistModel.find();
  }

  async findOne(id: string) {
    return await this.artistModel.findById(id);
  }

  async update(id: string, updateArtistDto: UpdateArtistDto) {
    return await this.artistModel.findByIdAndUpdate(id, updateArtistDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.artistModel.findByIdAndDelete(id);
  }
}
