class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getName = () => this.name;
    getAge = () => this.age;
    getGender = () => this.gender;
}

class House {
    constructor(address, residents) {
        this.address = address;
        this.residents = residents;
    }

    getAddress = () => this.address;
    getResidents = () => this.residents;
    addResident = (resident) => this.residents.push(resident);
}

// Creating a person named John
const john = new Person("John", 30, "Male", "Brown");

// Creating a person named Jane
const jane = new Person("Jane", 25, "Female", "Blonde");

// Creating a person named Michael
const michael = new Person("Michael", 40, "Male", "Black");

const house = new House("123 Main Street", [john, jane, michael]);
console.log(house);



