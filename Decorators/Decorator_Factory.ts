namespace Decorator2 {
	function Logger(logString: string) {
		return function (constructor: Function) {
			console.log(logString);
			console.log(constructor);
		};
	}

	@Logger("logging...")
	class Person {
		public name: string = "Max";
		constructor() {
			console.log("Creating person object");
		}
	}
}
