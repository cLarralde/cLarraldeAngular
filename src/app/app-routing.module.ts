import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CyberpunkTiendaComponent } from './cyberpunk-tienda/cyberpunk-tienda.component';
import { CyberpunkAboutComponent } from './cyberpunk-about/cyberpunk-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cyberpunk',
    pathMatch: 'full',
  },
  {
    path: 'cyberpunk',
    component: CyberpunkTiendaComponent,
  },
  {
    path: 'about',
    component: CyberpunkAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
