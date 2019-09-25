import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutGuardGuard } from './guards/logoutGuard/logout-guard.guard';
import { LoginGuardGuard } from './guards/loginGuard/login-guard.guard';
import { AlbumResolverGuard } from './guards/albumResolver/album-resolver.guard';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TracksResolverGuard } from './guards/tracksResolver/tracks-resolver.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [LogoutGuardGuard]
  },
  {
    path: 'albums',
    component: AlbumsPageComponent,
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'albums/:id',
    component: AlbumPageComponent,
    resolve: { album: AlbumResolverGuard, tracks: TracksResolverGuard }
  },
  { redirectTo: 'albums', path: '**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
