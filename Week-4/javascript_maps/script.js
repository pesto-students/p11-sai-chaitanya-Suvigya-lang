const calcWordFrequencies=()=>{
    let input=prompt("Input a sentence with spaces");
    const words=input.split(" ");;
    const map= new Map();
    for(const word of words){
        if(!map.has(word)){
            map.set(word,1)
        }
        else{
            let count=map.get(word);
            count++;
            map.set(word,count);
        }
    }
    for(const x of map.entries()){
        console.log(x);
    }
}
calcWordFrequencies();