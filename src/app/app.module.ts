import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ROUTING } from 'app/app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
