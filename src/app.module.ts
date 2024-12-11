import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ArtistModule } from './artist/artist.module';
import { FavoritesModule } from './favorites/favorites.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    ArtistModule,
    FavoritesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/library'),
  ],
})
export class AppModule {}
