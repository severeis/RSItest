import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowAnimalComponent } from "./animal/show-animal/show-animal.component";

const routes: Routes = [
  { path: '', component: ShowAnimalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
