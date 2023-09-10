import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosPageComponent } from './photos-page.component';
import { PhotosService } from './photos.service';

const routes: Routes = [{ path: '', component: PhotosPageComponent }];

@NgModule({
  declarations: [PhotosPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
  providers: [PhotosService],
})
export class PhotosPageModule {}
