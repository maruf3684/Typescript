namespace five {
	function Log(terget: any, propertyName: string) {
		console.log("I am log decoretor");
		console.log("terget=" + terget);
		console.log("propertyName=" + propertyName);
	}

	function Log2(terget: any, name: string, descriptor: PropertyDescriptor) {
		console.log("I am accossor decoretor");
		console.log("terget=" + terget);
		console.log("Name=" + name);
		console.log("descriptor=" + descriptor);
	}

	class Product {
		@Log
		public title: string;
		private _price: number;

		constructor(t: string, p: number) {
			this.title = t;
			this._price = p;
		}
        
		@Log2
		set Price(val: number) {
			if (val > 0) {
				this._price = val;
				console.log(this._price);
			} else {
				throw new Error("Invlid price - should be positive");
			}
		}

		getPriceWithTax(tax: number) {
			console.log(this._price + tax);
			return this._price + tax;
		}
	}

	const milk = new Product("Milk", 200);

	//milk.setPrice(400);
	milk.getPriceWithTax(2);
}
