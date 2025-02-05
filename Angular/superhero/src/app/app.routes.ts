import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from '../../../bases/src/app/app-routing.module';

const APP_ROUTES: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'heroe', component: HeroComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const app_routing = RouterModule.forRoot(APP_ROUTES);
