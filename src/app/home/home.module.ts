import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product/product.component';


@NgModule({
	declarations: [HomeComponent, ProductComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		FormsModule
	]
})
export class HomeModule { }
