import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { PhotosController } from './photos/photos.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/poc-ssr-universal-nestjs/browser'),
    }),
    HttpModule,
  ],
  controllers: [PhotosController],
})
export class AppModule {}
