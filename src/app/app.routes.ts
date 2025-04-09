import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DataPipeComponent } from './pages/data-pipe/data-pipe.component';
import { CurrencyPipeComponent } from './pages/currency-pipe/currency-pipe.component';
import { JsonPipeComponent } from './pages/json-pipe/json-pipe.component';
import { CustomPipeComponent } from './pages/custom-pipe/custom-pipe.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data-pipe', component: DataPipeComponent },
  { path: 'currency-pipe', component: CurrencyPipeComponent },
  { path: 'json-pipe', component: JsonPipeComponent },
  { path: 'custom-pipe', component: CustomPipeComponent },
];
