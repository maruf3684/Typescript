interface Addfn{
    (a:number, b:number):number;
}

const Add:Addfn = (a:number, b:number)=>{
   return a+b;
}

console.log(Add(2,4));
