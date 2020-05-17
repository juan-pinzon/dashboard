import { Injectable } from '@angular/core';
import { of, zip } from 'rxjs'
import data from 'src/assets/data/data'
import { groupBy, mergeMap, map, toArray } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	products$ = null

	constructor() {
		this.products$ = of(data.product)
		.pipe(
			mergeMap(res => res),
			groupBy(p => p.accountInformation.bank),
			mergeMap(group$ => zip(of(group$.key), group$.pipe(
				groupBy(ty => ty.typeAccount),
				mergeMap(grT => zip(of(grT.key), grT.pipe(toArray())).pipe(
					map(([typeAccount, products]) => ({ typeAccount, products })),
				)),
				toArray()
			)).pipe(
				map(([bank, accounts]) => ({bank, accounts}))
			))
		)
	}
}
