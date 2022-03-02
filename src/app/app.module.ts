import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// flexLayout
import { FlexLayoutModule } from '@angular/flex-layout';

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

// component
import { AppComponent, DialogComponent } from './app.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  declarations: [ AppComponent, DialogComponent ],
  entryComponents: [ DialogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
