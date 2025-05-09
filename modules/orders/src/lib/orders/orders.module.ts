import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: OrdersComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), OrdersComponent],
})
export class OrdersModule {}
