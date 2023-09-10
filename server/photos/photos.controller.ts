import { Controller, Get } from '@nestjs/common';
import { MOCK_PHOTOS } from 'full-stack-shared/mocks';
import { Album } from 'full-stack-shared/types';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Controller('photos')
export class PhotosController {
  constructor(private readonly httpService: HttpService) {}
  @Get()
  async photos(): Promise<Album[]> {
    return (
      await lastValueFrom(
        this.httpService.get<Album[]>(
          'https://jsonplaceholder.typicode.com/albums/1/photos'
        )
      )
    ).data;
    // return MOCK_PHOTOS;
  }
}
