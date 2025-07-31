import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { DPage } from './pages/d-page/d-page';

export const routes: Routes = [
    {path:'', component:HomePage},
    {path:'d/:id',component:DPage}
];
