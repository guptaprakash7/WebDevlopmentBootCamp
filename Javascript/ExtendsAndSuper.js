class Pet
{
constructor(name, age){
    this.name = name;
    this.age = age;
}
eat(){
    console.log(`${this.name} is eating.`);
}
}

class Cat extends Pet{
    constructor(name, age, lifeLeft){
        super(name, age);
        this.lifeLeft = lifeLeft;
    }
    meow(){
        console.log('Meow!!');
    }
}


class Dog extends Pet{
    bark(){
        console.log('Woff!!');
    }
}
