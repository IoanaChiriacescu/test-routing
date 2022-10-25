import { SecondChildComponent } from './second-child/second-child.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTestHomeComponent } from './my-test-home/my-test-home.component';

const routes: Routes = [
  {
    path: 'my-test',
    component: MyTestHomeComponent,
    children: [
      { path: 'first-child', component: FirstChildComponent },
      { path: 'second-child', component: SecondChildComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTestRoutingModule {}
