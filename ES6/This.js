class Player{
     constructor(name, age){
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh';
     }
}
const player1 = new Player('Tom', 33);
console.log(player1);
console.log(player1 instanceof Player);
