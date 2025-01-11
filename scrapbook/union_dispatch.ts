class Car {
    sound() {
        console.log("Wrooom!");
    }
}

class Plane {
    sound() {
        console.log("Wuuush!");
    }
}

function passingSound(vehicle: Car | Plane) {
    vehicle.sound();
}

passingSound(new Car());
passingSound(new Plane());
