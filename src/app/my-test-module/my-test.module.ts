import { MyTestHomeComponent } from './my-test-home/my-test-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondChildComponent } from './second-child/second-child.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { MyTestRoutingModule } from './my-test-routing.module';



@NgModule({
  declarations: [MyTestHomeComponent, SecondChildComponent, FirstChildComponent],
  imports: [
    CommonModule,
    MyTestRoutingModule
  ]
})
export class MyTestModule { }
