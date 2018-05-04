import { NgModule } from '@angular/core';
import {
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonComponentsModule } from 'common-components';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CommonComponentsModule,
  ],
  providers: [],
  bootstrap: [ProductListComponent],
})
export class AppModule {}
