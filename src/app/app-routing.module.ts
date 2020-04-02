import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardsService } from './services/auth/guards.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./pages/movies/movies.module').then(m => m.MoviesModule),
    canActivate: [GuardsService]
  },
  {
    path: 'player/:id',
    loadChildren: () =>
      import('./pages/player/player.module').then(m => m.PlayerModule),
    canActivate: [GuardsService]
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [GuardsService]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
