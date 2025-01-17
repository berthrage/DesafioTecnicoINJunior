let anoNascPessoas = [1997, 1987, 2009, 2000, 2014, 1963, 1960]

function VerificarIdades(arrayAnoNascPessoas) {
    let anoAtual = parseInt(document.getElementById("currentYear").value);
    let pessoasDisplay = "";
    for (let i = 0; i < arrayAnoNascPessoas.length; i++) {
        if ((anoAtual - arrayAnoNascPessoas[i]) >= 18) {
            let resultStr = `Pessoa ${i+1}: Maior de Idade\n`
            console.log(resultStr);
            pessoasDisplay += (resultStr);
        }
        else {
            let resultStr = `Pessoa ${i+1}: Menor de Idade\n`
            console.log(resultStr);
            pessoasDisplay += (resultStr);
        }
    }
    document.getElementById("endResult").innerText = pessoasDisplay;
}

//VerificarIdades(anoNascPessoas)

document.getElementById("currentYear").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
        event.preventDefault(); 
        VerificarIdades(anoNascPessoas); 
    }
});

