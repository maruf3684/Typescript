
type Admin={
    name:string;
    startDate:Date;
}

type Stuff={
    name:string;
    works:string[];
}

type employee=Admin&Stuff

//interface employee extends Admin,Stuff {}

const employee1:employee={
    name:"Munna",
    startDate:new Date(),
    works:['create server']
}

console.log(employee1);


///more operation we can do

type Combinable=string|number;
type Numeric=number|boolean;

type Universal=Combinable&Numeric