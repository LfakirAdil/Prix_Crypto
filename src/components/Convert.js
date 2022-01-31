// api de '''currency change'''
const api = "https://api.exchangerate-api.com/v4/latest/USD";



let fromCurrecy = USD
var toCurrecy = MAD
var finalValue = null
var finalAmount = null
var resultFrom;
var resultTo;
var searchValue;




function updateValue(e) {
    searchValue = e.target.value;
}



const results =()=> {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}
finalValue.innerHTML =((toRate / fromRate) * searchValue).toFixed(2);
 

export default  results