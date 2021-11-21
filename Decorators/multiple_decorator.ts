namespace three {

	function Logger(logString: string) {
        console.log("Logger run");
        
		return function (constructor: Function) {
			console.log(logString);
			console.log(constructor);
		};
	}


	function Template(prename: string) {
        console.log("Template run");
        
		return function (personclass: any) {
			const p = new personclass();
			console.log("<h1>" + prename + p.name + "</h1>");
		};
	}
    
    @Logger("I am logger")
	@Template("My Name Is - ")
	class Person {
		public name: string = "Munna";
        constructor(){
            console.log("I am callde");
            
        }
	}
}
