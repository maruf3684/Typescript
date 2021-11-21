namespace four {
	function Log(terget: any, propertyName: string) {
		console.log("I am log decoretor");
		console.log("terget=" + terget);
		console.log("propertyName=" + propertyName);
	}

	class Product {

        @Log
		public title: string;
		private _price: number;

		constructor(t: string, p: number) {
			this.title = t;
			this._price = p;
		}

		setPrice(val: number) {
			if (val > 0) {
				this._price = val;
			} else {
				throw new Error("Invlid price - should be positive");
			}
		}

		getPriceWithTax(tax: number) {
			return this._price + tax;
		}
	}
}
