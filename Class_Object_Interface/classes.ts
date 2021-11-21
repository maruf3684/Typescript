class Depertment {
	name: string;

	constructor(n: string) {
		this.name = n;
	}

	describe(this: Depertment) {
		console.log("depertment name " + this.name);
	}
}

const accounting = new Depertment("Accounting");

accounting.describe();
