function Logger(constructor: Function) {
	console.log("logging....");
	console.log(constructor);
}

@Logger
class Person {
	public name: string = "Max";
	constructor() {
		console.log("Creating person object");
	}
}
