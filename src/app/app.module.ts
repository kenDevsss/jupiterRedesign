import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CategoryLaneComponent } from './category-lane/category-lane.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    CategoryLaneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
