const car={     
    noOfWheels:4,
    engine:"4 stroke",
    transmission:"manual",
    noOfDoors:4,
    powerSteering:true,
}


var nexon=Object.create(car);

nexon.name="Nexon";
nexon.fuelTankCapacity="44L";
nexon.cargoVolume="350L";

function createCar(){
    this.noOfWheels=4,
    this.engine="4 stroke",
    this.transmission="manual",
    this.noOfDoors=4,
    this.powerSteering=true
}

var tiago = new createCar();

tiago.name="Tiago";
tiago.cargoVolume="242L";
tiago.curbWeight="1015Kg";

console.log(nexon);
console.log(tiago);
