import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'portfolio',
  //   loadChildren: () => import('./portfolio/components/components.module').then(m => m.ComponentsModule),
  // },
  // {
  //   path: '**',
  //   redirectTo: 'portfolio',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
