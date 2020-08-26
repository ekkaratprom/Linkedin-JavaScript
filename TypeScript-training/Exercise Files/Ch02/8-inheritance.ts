// Base / Parent Class
export class Animal {
    age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

// Derived / Child Class(s)
export class Dog extends Animal {
    woof(): string {
        return 'WOOF! WOOF! WOOF!';
    }
}

const dog = new Dog(2,4,'Gator');
dog.name;
dog.woof();

