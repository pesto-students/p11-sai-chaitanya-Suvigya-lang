let game={
    lives: 3,
    coins: 0
}
const getCoins=()=>{
    if(game.coins===0){
        game.coins=1*10;
    }
    else{
    game.coins=game.coins*10;
    }
}
const playerDies=()=>{
    game.lives=game.lives-1;
}
const newGame=()=>{
    game.lives=3;
    game.coins=0;
}
console.log(game);
getCoins();
console.log(game);
playerDies();
console.log(game);
newGame();
console.log(game);