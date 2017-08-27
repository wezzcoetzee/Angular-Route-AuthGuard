import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [ AuthGuard ],
})
export class GuardModule { }
