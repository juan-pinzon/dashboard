import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
	declarations: [AsideComponent, HeaderComponent, FooterComponent],
	imports: [
		CommonModule
	],
	exports: [
		AsideComponent,
		HeaderComponent,
		FooterComponent
	]
})
export class SharedModule { }
