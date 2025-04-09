import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DataPipeComponent } from './pages/data-pipe/data-pipe.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data-pipe', component: DataPipeComponent },
];
