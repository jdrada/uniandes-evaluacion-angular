import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCafeComponent } from './cafes/listar-cafe/listar-cafe.component';

const routes: Routes = [
  { path: '', redirectTo: '/cafes', pathMatch: 'full' },
  { path: 'cafes', component: ListarCafeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
