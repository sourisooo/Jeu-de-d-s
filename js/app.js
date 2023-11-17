
const visueldé = document.createElement('div');
visueldé.classList.add("dice");

console.log(visueldé);
console.log(document.querySelector('#player'));

const adv = document.createElement('div');
adv.classList.add("board");
adv.setAttribute('id','dealer');
document.querySelector('#app').append(adv);

const player = '#player';
const adversaire = '#dealer';

function random(){

lancer = Math.floor(Math.random()*6+1)


return lancer;
}


function ask(player,adversaire){

    console.log(player,adversaire);

nbde = prompt("Combien de dés voulez-vous jouer?");
eco(nbde,player);
eco(nbde,adversaire);

return nbde; 

}


function eco (nbde,player,adversaire) {


for (let compt=0; compt<nbde; compt++) {

     let visueldé = document.createElement('div');
    
    visueldé.classList.add("dice");


    console.log(player,adversaire);

    document.querySelector(player).append(visueldé);


    switch (random()) {
        case 1: visueldé.style.backgroundPositionX = '-600px';
            
            break;
    
            case 2: visueldé.style.backgroundPositionX = '-100px';
            
            break;
    
            case 3: visueldé.style.backgroundPositionX = '-200px';
            
            break;
    
            case 4: visueldé.style.backgroundPositionX = '-300px';
            
            break;
    
            case 5: visueldé.style.backgroundPositionX = '-400px';
            
            break;
    
            case 6: visueldé.style.backgroundPositionX = '-500px';
    
            break;
            
        default:visueldé.style.backgroundPositionX = '0px';
            break;
    }


}

return visueldé;


}


ask(player,adversaire);


console.log(lancer,visueldé.style.backgroundPositionX);




