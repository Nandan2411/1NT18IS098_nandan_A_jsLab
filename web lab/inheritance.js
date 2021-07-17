class Animal {
    constructor(name) {
        this.name = name;
    }
    kind() {
        console.log("pet");
    }
    static sound() {
        console.log("meoww");
    }
}

class tiger extends Animal {
    constructor(name) {
        super(name);
    }
    kind() {
        console.log("wild animal is " + this.name);
    }
}
class cub extends tiger {
    constructor(name) {
        super(name)
    }
}

class bird {
    constructor(name) {
        this.name = name;
    }
}

class pecock extends bird {
    constructor(name) {
        super(name)
    }
    type() {
        console.log('im a brid ' + this.name);
    }
}

const a = new Animal();
Animal.sound();
const b = new tiger('tiger');
b.kind();
const c = new cub('leo');
c.kind()
const p = new pecock('peacock');
p.type();