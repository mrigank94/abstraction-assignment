function Car(name, make, type, currentFuel, fuelCapacity = 30) {

    let noOfWheels = 4;
    this.name = name;
    this.make = make;
    this.type = type;
    this.currentFuel = currentFuel;
    this.fuelCapacity = fuelCapacity;

    let startCompressor = () => {
        console.log('Compressor started');
        return 1;
    };

    let startIgnition = () => {
        console.log('Ignition started');
        return 1;
    };

    let checkDifferentiator = () => {
        console.log('Diffentiator and axle ok');
        return 1;
    };

    let checkFuel = () => {
        return this.currentFuel > 5;
    };

    this.startCar = () => {
        if(startCompressor() && startIgnition() && checkDifferentiator() && checkFuel() && noOfWheels === 4) {
            console.log('Car started');
            return 1;
        } else {
            console.log('Error occurred in starting car. Please ask gaurav sir to start it somehow :)')
        }
    };

    this.stopCar = () => {
        // Make up some random sequence like I did for start car :D
    }
}

let car = new Car('WagonR', 'Maruti', 'Hatchback', 6);
car.startCar();