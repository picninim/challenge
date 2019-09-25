import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpotifyTokenInterceptService } from './services/spotifyTokenIntercept/spotify-token-intercept-service';
import { ScrollTriggerDirective } from './directives/scrollTrigger/scroll-trigger.directive';
import { AlbumComponent } from './components/album/album.component';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { AlbumPageComponent } from './pages/album-page/album-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { RecentAlbumsComponent } from './components/recent-albums/recent-albums.component';
import { AlbumsResultsComponent } from './components/albums-results/albums-results.component';
import { HeaderComponent } from './components/header/header.component';
import { TrackComponent } from './components/track/track.component';
import { MsToDurationPipe } from './pipes/msToDuration/ms-to-duration.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ScrollTriggerDirective,
    AlbumComponent,
    AlbumsPageComponent,
    AlbumPageComponent,
    LoginPageComponent,
    AlbumsComponent,
    RecentAlbumsComponent,
    AlbumsResultsComponent,
    HeaderComponent,
    TrackComponent,
    MsToDurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyTokenInterceptService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
