class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.job = "";
    }

    getName = () => this.name;
    getAge = () => this.age;
    getGender = () => this.gender;
    setJob = (job) => this.job = job;
}

class House {
    constructor(address, price, residents) {
        this.address = address;
        this.price = price;
        this.residents = residents;
    }

    getAddress = () => this.address;
    getPrice = () => this.price;
    getResidents = () => this.residents;


    addResident = (resident) => this.residents.push(resident);
}

class Programmer extends Person {
    constructor(name, age, company, salary, language) {
        super(name, age);
        this.company = company;
        this.salary = salary;
        this.language = language;
    }

    sayHi = () => {
        console.log(`Hello, I'm a programmer! My name is ${this.getName()} and I'm ${this.getAge()}. I work for ${this.company}`);
    }
}

let programmer = new Programmer('Michael', 19, 'Twitch', 1000000, 'JavaScript');
programmer.sayHi();