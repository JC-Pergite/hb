import './rxjs-operators';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';
import { InMemoryBackendService, InMemoryWebApiModule} from 'angular-in-memory-web-api';

import { routing, appRoutingProviders }    from './app.routing';

import { PhotoData }  from './main/photo-data';

import { AppComponent } from './app.component';
import { HomeModule } from './main/home/home.module';
import { HomeResolver } from './main/home/home.resolver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(PhotoData, {passThruUnknownUrl: true}),
    JsonpModule,
    routing,
    HomeModule
  ],
  providers: [ appRoutingProviders, HomeResolver,
                { provide: XHRBackend, useClass: InMemoryBackendService },
                { provide: PhotoData, useClass: InMemoryWebApiModule } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
