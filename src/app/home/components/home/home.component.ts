import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment'


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	typeAccounts: any[] = environment.typeAccounts
	products$: Observable<any[]>

	initProducts = null
	othersProducts: any[] = []
	allData = false

	constructor(
		private productsService: ProductsService
	) { }

	ngOnInit() {
		this.productsService.products$
			.subscribe((data) => {
				if (data.bank === environment.initBank) {
					this.initProducts = data.accounts
					return
				}
				this.othersProducts.push(data)
			})
	}
}
