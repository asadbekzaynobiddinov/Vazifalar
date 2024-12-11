import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Album } from './albums.schema';
import { Model } from 'mongoose';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectModel(Album.name) private readonly albumSchema: Model<Album>,
  ) {}
  async create(createAlbumDto: CreateAlbumDto) {
    const newAlbum = new this.albumSchema(createAlbumDto);
    return await newAlbum.save();
  }

  async findAll() {
    return await this.albumSchema.find();
  }

  async findOne(id: string) {
    return await this.albumSchema.findById(id);
  }

  async update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return await this.albumSchema.findByIdAndUpdate(id, updateAlbumDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.albumSchema.findByIdAndDelete(id);
  }
}
