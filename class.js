class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
    }
}
const student1 = new Student(1, "s");
const student2 = new Student(2, "p");
console.log(student1, student2);