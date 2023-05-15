function  counter(){
    let count=0;
    function increase(){
        return count++;
    }
    return increase;
}

const firstCounter=counter();
const secondCounter=counter();
const firstValue=[];
const secondValue=[];
for(i=0;i<5;i++){
    firstValue[i]=firstCounter();
    secondValue[i]=secondCounter();
}
console.log(firstValue);
console.log(secondValue);
