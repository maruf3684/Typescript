//interface is custom type
//id is optional 
//class also can have  optional property

interface Person {
	name: string;
	age: number;
    id?:number;
	power(musslesize: string): void;
}

let user1: Person;
user1 = {
	name: "max",
	age: 21,
	power(mussle: string) {
		console.log(mussle);
	},
};

user1.power("soktysali")