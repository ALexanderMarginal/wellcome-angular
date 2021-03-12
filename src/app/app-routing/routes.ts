import { Routes } from '@angular/router';

import { MenuComponent } from '@/app/menu/menu.component';
import { DishdetailComponent } from '@/app/dishdetail/dishdetail.component';
import { HomeComponent } from '@/app/home/home.component';
import { AboutComponent } from '@/app/about/about.component';
import { ContactComponent } from '@/app/contact/contact.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'dishdetail/:id', component: DishdetailComponent},
  { path: 'contactus',     component: ContactComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];
