
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

// passing data from Person constructor to Student
class Student extends Person {
    constructor(name, age, major) {
        // getting exact data from Person constructors
        super(name, age);
        //adding new data
        this.major = major;
    }
    // ! means fliping value, !! means flipping it twice 
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description;
    }
}

class Traveler extends Student {
    constructor (name, age, major, location) {
        super(name, age, major);
        this.location = location;
    }

    getLocation() {
        let homeLocation = super.getGreeting();

        if (this.location) {
            homeLocation += ` Im visiting from ${this.location}.`
        }

        return homeLocation;
    }
}


const me = new Traveler('Dainius Laucys', 25, 'Business Information Management', 'Vilnius');
console.log(me.getLocation());

const other = new Traveler();
console.log(other.getLocation());