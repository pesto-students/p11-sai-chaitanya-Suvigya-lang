let nums=[];
let even=[];
let odd=[];
const divideArray=(nums)=>{
    for(const num of nums){
        if(num%2==0){
            even.push(num);
        }
        else{
            odd.push(num);
        }   
     }
    console.log('Even numbers:')
    if(even.length<=0){
        console.log('None')
    }
    else{
        for(const num of even){
            console.log(num);
        }
    }
    console.log('Odd Numbers:')
    if(odd.length<=0){
        console.log('None')
    }
    else{
        for(const num of odd){
            console.log(num);
        }
    }
}
divideArray(nums);