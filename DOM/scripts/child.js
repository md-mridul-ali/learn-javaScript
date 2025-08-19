// create element and set innerHTML
const newChild=document.createElement('li');
newChild.innerHTML='New born baby footballer here';
//find the parent where you will add the child
const playersList=document.getElementById('player-list');
//append the child to the parent
playersList.appendChild(newChild);