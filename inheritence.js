class Parent{
    constructor(){
        this.fatherName = "shapan";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    fullName(){
        return this.name+ " "+ this.fatherName;
        
    }
}
const baby = new Child("shawn");
console.log(baby.fullName());