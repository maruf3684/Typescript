//abstract class ke inherit korle tar abstract method ke implement korte e hobe

abstract class Depertment {
	constructor(public name: string) {}

	abstract Printname(this: Depertment, checkvalue: string): void;
}

class CseDepertment extends Depertment {
	constructor(public id: string) {
		super("Main Depertment");
	}

	Printname(this: CseDepertment, checkvalue: string) {
		console.log(
			`name is ${this.name} id is ${this.id} checkvalue  ${checkvalue}`
		);
	}
}

const student = new CseDepertment("181-15-1927");
student.Printname("i am check");
