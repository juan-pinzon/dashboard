import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
	declarations: [AsideComponent, HeaderComponent],
	imports: [
		CommonModule
	],
	exports: [
		AsideComponent,
		HeaderComponent
	]
})
export class SharedModule { }
