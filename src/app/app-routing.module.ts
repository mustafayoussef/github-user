import { ProfileResolver } from './core/guards/profile.resolver';
import { NotFoundComponent } from './home/components/not-found/not-found.component';
import { ProfileComponent } from './home/components/profile/profile.component';
import { UsersComponent } from './home/components/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    resolve: { profile: ProfileResolver },
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
