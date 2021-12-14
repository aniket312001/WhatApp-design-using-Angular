import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultDisplayComponent } from './default-display/default-display.component';
import { MychatsComponent } from './mychats/mychats.component';

const routes: Routes = [
  {path:'',component:DefaultDisplayComponent},
  {path:'chat/:name',component:MychatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
