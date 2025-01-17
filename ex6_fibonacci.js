function CalculateFibonacci() {
    let n = parseInt(document.getElementById("valueInt").value);
    let result = ""

    for (let i = 0; i < n; i++) {
        result += `${RecFibonacci(i)},   n = ${i}\n`;
    }

    console.log(result);
    document.getElementById("endResult").innerText = result;
}

function RecFibonacci(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return RecFibonacci(n - 1) + RecFibonacci(n - 2);
    }
}

document.getElementById("valueInt").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
        event.preventDefault(); 
        CalculateFibonacci(); 
    }
});

