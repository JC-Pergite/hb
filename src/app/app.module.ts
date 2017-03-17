import './rxjs-operators';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';
import { InMemoryBackendService, InMemoryWebApiModule} from 'angular-in-memory-web-api';

import { routing, appRoutingProviders }    from './app.routing';

import { PhotoData }  from './main/photo-data';

import { AppComponent } from './app.component';
import { HomeModule } from './main/home/home.module';
import { UserModule } from './doers/user.module';
import { PhotoModule } from './main/photo/photo.module';

import { HomeResolver } from './main/home/home.resolver';
import { PhotoResolver } from './main/photo/photo.resolver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(PhotoData, {passThruUnknownUrl: true}),
    JsonpModule,
    routing,
    HomeModule,
    UserModule,
    PhotoModule
  ],
  providers: [ appRoutingProviders, HomeResolver,
                { provide: XHRBackend, useClass: InMemoryBackendService },
                { provide: PhotoData, useClass: InMemoryWebApiModule } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
