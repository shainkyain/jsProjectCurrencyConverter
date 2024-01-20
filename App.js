const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");
const fromCurr  = document.querySelector(".from select");
const toCurr  = document.querySelector(".to select");
const msg = document.querySelector(".msg");



for( let select of dropdowns){
for (currCode in countryList) {
     
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
if(select.name === "from" && currCode === "USD"){
    select.append(newOption);
}else if(select.name === "to" && currCode === "INR"){
    
}
select.append(newOption);

}
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
});
}


const updateFlag = (element)=>{
     let currCode = element.value;
     let countryCode = countryList[currCode];
     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
     let img = element.parentElement.querySelector("img");
     img.src = newSrc;

}

btn.addEventListener("click", async(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    
    if(amtVal === "" || amtVal <1 ){
        amtVal = 1;
        amount.value = 1;
        console.log(amtVal);
    }


console.log(fromCurr.value,  toCurr.value);
const URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;


let response = await fetch(URL);
let data = await response.json();
let rate = data[toCurr.value.toLowerCase()];
console.log(rate);

let finalAmount = rate* amount.value;
msg.innerText = `${amtVal}  ${fromCurr.value} = ${finalAmount}   ${toCurr.value}`;
});

 