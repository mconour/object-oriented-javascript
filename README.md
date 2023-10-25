# Class Definitions

In this code snippet, we define two classes: `Person` and `House` to model individuals and their residence. Here's a brief description of each class:

## `Person`

The `Person` class represents an individual and includes the following properties:
- `name`: The person's name.
- `age`: The person's age.
- `gender`: The person's gender.

It also provides methods to access these properties:
- `getName()`: Returns the person's name.
- `getAge()`: Returns the person's age.
- `getGender()`: Returns the person's gender.

## `House`

The `House` class represents a residential property and includes the following properties:
- `address`: The address of the house.
- `residents`: An array containing the residents of the house.

It offers methods to interact with the house's properties:
- `getAddress()`: Returns the address of the house.
- `getResidents()`: Returns the array of residents.
- `addResident(resident)`: Adds a resident to the `residents` array.

# Usage

In the provided code, we create instances of the `Person` class and add them as residents to an instance of the `House` class. We also demonstrate how to access and modify the list of residents.

```javascript
const john = new Person("John", 30, "Male");
const jane = new Person("Jane", 25, "Female");
const michael = new Person("Michael", 40, "Male");

const house = new House('123 Fake Street', [john, jane, michael]);
console.log(house.getResidents());

const emily = new Person("Emily", 22, "Female");
house.addResident(emily);
console.log(house.getResidents());
```

In this example, John, Jane, and Michael are added as initial residents to the house, and then Emily is added to the list of residents.

Feel free to use and modify this code in your projects to represent people and their residence in a structured way.