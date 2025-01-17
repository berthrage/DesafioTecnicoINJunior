function CalculatePalindrome() {
    let phrase = document.getElementById("valueText").value;

    let phraseCheck = phrase.toLowerCase();
    phraseCheck = phrase.split(' ').join('');

    let phraseCheckInverted = phraseCheck.split('').reverse().join('');
    let result = "É PALÍNDROMO";

    if (phraseCheck !== phraseCheckInverted) {
        result = "NÃO É PALÍNDROMO";
    }

    console.log(`Str Original: ${phraseCheck}`);
    console.log(`Str Invertida: ${phraseCheckInverted}`);
    console.log(result);
    document.getElementById("endResult").innerText = (`\nStr Original: ${phraseCheck}
                                \nStr Invertida: ${phraseCheckInverted}\n\n${result}`);
}

document.getElementById("valueText").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
        event.preventDefault(); 
        CalculatePalindrome(); 
    }
});

