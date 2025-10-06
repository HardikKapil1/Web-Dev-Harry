class Animal {
    constructor(name) {
        this.name = name;

        console.log('Object is Created');
    }
    eats() {
        console.log('Khana  kha rha hu');

    }
    jumps() {
        console.log('Kood rha hoon');
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        this.name = name;

        console.log('Object is Created and he is a lion');
    }
}

let a = new Animal("Bunny");
console.log(a)
console.log(a.eats);


let l = new Lion("Shera")
console.log(l);
