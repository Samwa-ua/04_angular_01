import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';

import { UsersModule } from './users/users.module';
import { MainToolbarComponent } from 'src/app/components/main-toolbar/main-toolbar.component';
import { MainTabsComponent } from 'src/app/components/main-tabs/main-tabs.component';

@NgModule({
  declarations: [AppComponent, MainToolbarComponent, MainTabsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    UsersModule,
    MatTabsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
