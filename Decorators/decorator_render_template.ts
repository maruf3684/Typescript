namespace template {
	function Template(prename: string) {
		return function (personclass: any) {
			const p = new personclass();
			console.log("<h1>" + prename + p.name + "</h1>");
		};
	}

	@Template("My Name Is - ")
	class Person {
		public name: string = "Munna";
        constructor(){
            console.log("I am callde");
            
        }
	}
}
