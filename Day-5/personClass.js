class Person{
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

const obj = new Person("Raj Kamal", 26, "Chennai");
console.log(`Name: ${obj.name}, Age: ${obj.age}, City: ${obj.city}`);