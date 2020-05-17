import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment'
import { isValid } from 'cc-validate'

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	@Input() product

	creditCard = null

	constructor() {}

	ngOnInit() {
		this.creditCard = isValid(this.product.accountInformation.accountIdentifier)
		if (this.creditCard.isValid) {
			this.creditCard.icon = `https://via.placeholder.com/100x60?text=${this.creditCard.cardType}`
			this.creditCard.cardNumber = 'xxxx '.repeat(3) + this.creditCard.cardNumber.slice(-5)
		}
	}

	getTypeAccount(typeAccount) {
		const typeAcc = environment.typeAccounts.find(item => item.name === typeAccount)
		return typeAcc.alias
	}

	getInt(num) {
		return Math.round(num)
	}

}
