//задача в соответствии с первым вариантом

class Person {
    #name;
    #age;
    #country;
    
    constructor(name, age, country) {
        this.#name = name;
        this.#age = age;
        this.#country = country;
    }

    printIntelligence() {
        console.log(`имя: ${this.#name} возраст: ${this.#age} страна: ${this.#country}`);
    }
}

let npc1 = new Person('Ivan', '21', 'Minsk');
let npc2 = new Person('Arseniy', '20', 'Minsk');

npc1.printIntelligence();
npc2.printIntelligence();