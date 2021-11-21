interface PersonInterface {
	readonly name: string;
	age?: number;  //age can be optional
	power(musslesize: string): void;
}

class Person implements PersonInterface {
	constructor(public name: string, public age?: number) {}
	power(mussle: string) {
		console.log(mussle);
	}
}


const user:PersonInterface = new Person("munna");
//user.name="Hena" cant assign because of readonly
user.power("20 inch")