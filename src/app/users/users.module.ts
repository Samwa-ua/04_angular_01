import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [UsersPageComponent, CardComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatCheckboxModule,
  ],
  exports: [CardComponent, UsersPageComponent],
})
export class UsersModule {}
