const calculator={

    add:function(num1,num2){
        return num1+num2;
    },
    subtract:function(num1,num2){
        return num1-num2;
    },
    multiply:function(num1,num2){
        return num1*num2;
    },
    divide:function(num1,num2){
        return num1/num2;
    }
}

const scientificCalculator={
    __proto__:calculator,
    square:function(num){
        return num*num;
    },
    cube:function(num){
        return num*num*num;
    },
    power:function(num1,num2){
        return Math.pow(num1,num2);
    }
}
function multiplybyTwo(num){
    return num*2;
}
function powerOfThree(num){
    return Math.pow(num,3);
}
const add=scientificCalculator.add.call(this,10,5);
console.log(add);
const subtract=scientificCalculator.subtract.apply(this,[10,5])
console.log(subtract);
const multiplyby=multiplybyTwo.bind(scientificCalculator,5);
console.log(multiplyby());
const powerThree=powerOfThree.bind(scientificCalculator,2);
console.log(powerThree());

