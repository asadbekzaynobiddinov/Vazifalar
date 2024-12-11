import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Favorite } from './favorites.schema';
import { Model } from 'mongoose';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel(Favorite.name)
    private readonly favoriteSchema: Model<Favorite>,
  ) {}
  async create(createFavoriteDto: CreateFavoriteDto) {
    const newFavorite = new this.favoriteSchema(createFavoriteDto);
    return await newFavorite.save();
  }

  async findAll() {
    return await this.favoriteSchema.find();
  }

  async findOne(id: string) {
    return await this.favoriteSchema.findById(id);
  }

  async update(id: string, updateFavoriteDto: UpdateFavoriteDto) {
    return await this.favoriteSchema.findByIdAndUpdate(id, updateFavoriteDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.favoriteSchema.findByIdAndDelete(id);
  }
}
