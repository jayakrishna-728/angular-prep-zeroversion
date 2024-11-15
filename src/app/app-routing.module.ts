import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './ui-table/table/table.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo:'homes',pathMatch:'full'},
  { path:'**' , redirectTo:'homes'}, //CCATCH ALL THE ROUTES WHICH ARE WRONG AND SEND TO HOME
  { path: '', component:TableComponent, canActivate:[AuthGuard]}, //add canActivate check user is accessed or not 
  // { path: 'home/can', component:, canActivateChild:[AuthGuard]}
  {path:'homes',component:TableComponent},
  {path:'home' , loadChildren: './ui-table/ui-table.module.ts#UiTableModule'}  //lazy loading
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[ RouterModule ]
 

})
export class AppRoutingModule {

  
 }
