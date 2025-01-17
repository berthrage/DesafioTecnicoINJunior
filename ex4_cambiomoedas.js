function CalculateCurrencies() {
    let valueBRL = parseFloat(document.getElementById("valueReal").value);
    let valueEUR = valueBRL / 6.10;
    let valueUSD = valueBRL / 5.70; 

    let spanResultBRL = document.getElementById("resultReal");
    spanResultBRL.innerText = valueBRL.toFixed(2);
    console.log(`O valor em Reais (BRL) é R$ ${valueBRL}`);

    let spanResultEUR = document.getElementById("resultEuro");
    spanResultEUR.innerText = valueEUR.toFixed(2);
    console.log(`O valor em Euro (EUR) é € ${valueEUR}`);

    let spanResultUSD = document.getElementById("resultUSD");
    spanResultUSD.innerText = valueUSD.toFixed(2);
    console.log(`O valor em Dólar Americano (USD) é $ ${valueUSD}`);
}


document.getElementById("valueReal").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
        event.preventDefault(); 
        CalculateCurrencies(); 
    }
});


