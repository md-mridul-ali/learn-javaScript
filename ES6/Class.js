class Player {
    goal(){
        console.log('Score a goal');
    }
}
const player1 = new Player();
player1.goal();

class Animal {
    constructor(name){
        console.log(name);     
    }
}
const animal1 = new Animal('Dog');
