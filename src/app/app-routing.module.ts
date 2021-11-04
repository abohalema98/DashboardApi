import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentsComponent } from './core/addstudents/addstudents/addstudents.component';
import { EditstudentsComponent } from './core/editstudents/editstudents/editstudents.component';
import { ViewlistComponent } from './core/viewlist/viewlist/viewlist.component';

const routes: Routes = [
  { path: 'addStudnts', component: AddstudentsComponent },
  { path: 'viewList', component: ViewlistComponent },
  { path: '', component: ViewlistComponent },
  { path: 'editStudents/:id', component: EditstudentsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
