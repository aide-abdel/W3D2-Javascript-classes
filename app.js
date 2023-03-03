class Cat {
    age;
    size;
    breed;
    meow(){
        console.log("Meow");
    }
    purr(){
        console.log("Purr")
    }
    run(){
        console.log("Run!")
    }

}

let tom = new Cat;
let bonito = new Cat;

console.log(tom);
console.log(bonito);

tom.meow();
tom.purr();
tom.run();

bonito.meow();
bonito.purr();
bonito.run();


class Pirate{

    constructor(name,age,country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    myNameis(){
        console.log(`Hi, my name is ${this.name}`)
    }
    howoldIm(){
        console.log(`my Age is ${this.age}`)
    }
    imFrom(){
        console.log(`i'm from ${this.country}`)
    }
}

jollyRoger = [new Pirate("Joe",30,"France"),new Pirate("Donald","50","Netherland"), new Pirate("Jenna",19,"Spain")];
blackPearl = [new Pirate("Jack",40,"America"), new Pirate("Tom", 18,"Brazil"), new Pirate("Edwardo",44,"Germany")]

jollyRoger.forEach(element => {
    console.log(element.name,element.age,element.country)
});

blackPearl.forEach(element => {
    console.log(element.name,element.age,element.country)
});