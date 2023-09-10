import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyrightsPageComponent } from './copyrights-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CopyrightsPageComponent }];

@NgModule({
  declarations: [CopyrightsPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CopyrightsPageModule {}
