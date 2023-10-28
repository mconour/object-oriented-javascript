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

const Michael = new Person('Michael', 19, 'Male')
const house = new House("123 Main Street", 200000, []);
Michael.setJob('Developer')
house.addResident(Michael);
console.log(house.getResidents());