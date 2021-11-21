//interface is custom type

interface Person {
	name: string;
	age: number;
	power(musslesize: string): void;
}

let user1: Person;
user1 = {
	name: "max",
	age: 21,
	power(mussle: string) {
		console.log(mussle);
	}
};

user1.power("soktysali")