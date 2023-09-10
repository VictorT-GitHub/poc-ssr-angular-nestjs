import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    title: 'Home',
    path: '',
    pathMatch: 'full',
    loadChildren: async () =>
      (await import('./home-page/home-page.module')).HomePageModule,
  },
  {
    title: 'Photos',
    path: 'photos',
    pathMatch: 'full',
    loadChildren: () =>
      import('./photos-page/photos-page.module').then(
        (m) => m.PhotosPageModule
      ),
  },
  {
    title: 'About | Copyrights',
    path: 'copyrights',
    pathMatch: 'full',
    loadChildren: () =>
      import('./copyrights-page/copyrights-page.module').then(
        (m) => m.CopyrightsPageModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
