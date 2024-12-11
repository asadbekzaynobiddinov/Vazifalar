import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Favorite, favoriteSchema } from './favorites.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Favorite.name,
        schema: favoriteSchema,
      },
    ]),
  ],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {}
