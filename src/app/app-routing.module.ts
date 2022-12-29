import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'editar', component: EditarPerfilComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
