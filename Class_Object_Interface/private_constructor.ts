// akta class er aktar besy instance banano jabe na

class SocilaDepertment {
    
	private constructor(private name: string, private year: string) {}
	//private
	static instance: SocilaDepertment;
	static putValue() {
		if (SocilaDepertment.instance) {
			return SocilaDepertment.instance;
		}
		SocilaDepertment.instance = new SocilaDepertment("Social", "123");
	}

	testfunc() {
		console.log("this is test func");
	}
    
}

const one = SocilaDepertment.putValue();
console.log(SocilaDepertment.instance);

const two = SocilaDepertment.putValue();
console.log(SocilaDepertment.instance);
