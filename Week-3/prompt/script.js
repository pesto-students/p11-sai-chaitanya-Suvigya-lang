const numToGuess=5;
let totalGuesses=10;
const playGuessingGame=(numToGuess,totalGuesses)=>{
    let count=0;
    let num=prompt('Enter number 1 to 100');
   while(num!=numToGuess&&totalGuesses>0){
    if(num===null){
        return 0;
    }
    else if(num>numToGuess){
        num=prompt('X is too big');
        totalGuesses--;
    }
    else if(isNaN(num)||num==""){
        num=prompt('Please Enter a Number')

    }
    else{
        num=prompt('X is too small')
        totalGuesses--;
    }
    count++;
   }
   if(count>numToGuess){
    count=0;
   }
   return count;
}
const times=playGuessingGame(numToGuess,totalGuesses);
console.log(times);