class Depertment {
	// public name: string;
	// private employees: string[] = [];

	// constructor(n: string) {
	// 	this.name = n;
	// }

	private employees: string[] = [];
	constructor(public readonly name: string, private id: string) {}

	describe(this: Depertment) {
        //this.name="Change deperement name"
		console.log(`Depertment:${this.name}\nid: ${this.id}`);
	}

	addEmployee(this: Depertment, employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInformation(this: Depertment) {
		console.log("total employee: " + this.employees.length);
		console.log(this.employees);
	}
}

const accounting = new Depertment("Accounting", "181-15-1927");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.describe();
accounting.printEmployeeInformation();
