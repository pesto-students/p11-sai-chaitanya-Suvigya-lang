const currency_one='EUR'
async function getExchangeRate(currency){
    const resp=await fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
    console.log(resp.json());
   // const rate=resp.rates[currency].toFixed(3);
    //console.log(rate);
}

getExchangeRate('USD');