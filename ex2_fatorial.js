function CalculateFact() {
    let n = parseInt(document.getElementById("valueFact").value);

    if (n < 0) {
        let alertStr = "Valor informado deve ser positivo e inteiro. Insira novamente."
        console.log(alertStr);
        alert(alertStr);
        return;
    } 

    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    document.getElementById("result").innerText = factorial;
    console.log(`Fatorial de ${n} é ${factorial}`);
    
    // Delay no prompt para que o DOM (resultado) atualize antes.
    setTimeout(ContinueProcessPrompt, 0);
}

function ContinueProcessPrompt() {
    let continueCalculating = "";
    while (continueCalculating != "S" && continueCalculating != "s" && continueCalculating != "N" && continueCalculating != "n") {
        continueCalculating = prompt("Você deseja continuar calculando? ('S' para sim, 'N' para não)");

        if (continueCalculating == 'N' || continueCalculating == 'n') {
            document.getElementById("calcButton").style.display = "none";
            document.getElementById("spanResult").innerText = "";
            document.getElementById("result").innerText = "";
            document.getElementById("endMessage").innerText = "Programa encerrado.";
        }
    }
}

document.getElementById("valueFact").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
        event.preventDefault(); 
        CalculateFact(); 
    }
});

