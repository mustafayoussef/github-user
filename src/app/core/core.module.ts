import { UsersService } from './services/users/users.service';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, AppRoutingModule, HttpClientModule],
  exports: [NavbarComponent],
})
export class CoreModule { }
