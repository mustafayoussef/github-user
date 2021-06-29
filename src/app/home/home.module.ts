import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [UsersComponent, ProfileComponent, NotFoundComponent],
  imports: [CommonModule, CoreModule, SharedModule, RouterModule],
  exports: [UsersComponent, ProfileComponent],
})
export class HomeModule { }
