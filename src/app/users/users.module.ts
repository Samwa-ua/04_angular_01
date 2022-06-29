import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { ActionsToolbarComponent } from './components/actions-toolbar/actions-toolbar.component';

@NgModule({
  declarations: [UsersPageComponent, CardComponent, ActionsToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatCheckboxModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [CardComponent, UsersPageComponent],
})
export class UsersModule {}
