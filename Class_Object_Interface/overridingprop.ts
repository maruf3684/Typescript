class Depertment {
	protected employees: string[] = [];
	constructor(public readonly name: string, private id: string) {}

	describe(this: Depertment) {
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



class SweDepertment extends Depertment {
	constructor(
		public readonly name: string,
		private reports: string[]
	) {
		super(name, "181-15-1927");
	}

    //overriding addEmployee method

    addEmployee(this: SweDepertment, employee: string) {
        if(employee==="Max"){
          return;
        }
		this.employees.push(employee);
	}


    addReport(this:SweDepertment,report: string){
        this.reports.push(report);
    }

    printReport(this:SweDepertment){
        console.log("report"+this.reports);
        
    }
}




const swe = new SweDepertment("softwere",["Report-1,REport-2"]);
swe.addEmployee("Max");
swe.addEmployee("Manu");
swe.describe();
swe.printEmployeeInformation();
swe.printReport()

swe.addReport("Report-3")
swe.printReport()