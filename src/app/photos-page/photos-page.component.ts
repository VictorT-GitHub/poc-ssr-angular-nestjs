import { Component, inject, signal } from '@angular/core';
import { Album } from '../../../full-stack-shared/types';
import { PhotosService } from './photos.service';

@Component({
  selector: 'avportal-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss'],
})
export class PhotosPageComponent {
  photosService = inject(PhotosService);
  photos = signal<Album[]>([]);

  ngOnInit() {
    this.photosService.getPhotos().subscribe({
      next: (value) => {
        this.photos.set(value);
        console.log('http call succeed', Date.now());
      },
      error: (err) => console.log(err),
    });
  }
}
