import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { DPage } from './pages/d-page/d-page';
import { DCPage } from './pages/d-c-page/d-c-page';

export const routes: Routes = [
    {path:'', component:HomePage},
    {path:'d/:id',component:DPage},
    {path:'d/c/:name', component:DCPage}
];
