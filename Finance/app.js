const api_key = "088d380626f08c07539c0972";
const url = "https://v6.exchangerate-api.com/v6/" + api_key;

//elements

const currency_one = document.getElementById("currency-one");
const currency_two = document.getElementById("currency-two");
const list_one = document.getElementById("list-one");
const list_two = document.getElementById("list-two");
const amount = document.getElementById("amount");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");


fetch(url + "/codes")
    .then(res => res.json())
    .then(data => {
        const items = data.supported_codes;
        let options="";
        for(let item of items){
            options += `<option value="${item[0]}">${item[1]}</option>`;
        }
        list_one.innerHTML = options;
        list_two.innerHTML = options;

    });

calculate.addEventListener('click', ()=>{
    const stock1 = currency_one.value;
    const stock2 = currency_two.value;

    const amountRes = amount.value;

    fetch(url+"/latest/"+stock1)
        .then(res => res.json())
        .then(data => {
            const FinalRes = data.conversion_rates[stock2] * amountRes;
            result.innerHTML = `<div class="card border-primary">
                        <div class="card-body text-center" style="font-size: 30px;">${amountRes} ${stock1} = ${FinalRes} ${stock2}</div>
                </div>`;
            //
        })

})


