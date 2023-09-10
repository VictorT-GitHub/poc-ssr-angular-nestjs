import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Album } from '../../../full-stack-shared/types';

@Injectable()
export class PhotosService {
  http = inject(HttpClient);

  getPhotos() {
    return this.http.get<Album[]>(
      // 'http://localhost:4200/api/photos'
      'https://jsonplaceholder.typicode.com/albums/1/photos'
      // { headers: { 'Content-Type': 'application/json' } }
    );
  }
}
