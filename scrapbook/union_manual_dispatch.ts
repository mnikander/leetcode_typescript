class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark(); // TypeScript knows `animal` is a Dog
    } else {
        animal.meow(); // TypeScript knows `animal` is a Cat
    }
}

makeSound(new Dog());
makeSound(new Cat());
