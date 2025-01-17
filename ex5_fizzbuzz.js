function CalculateFizzbuzz() {
    let value = parseInt(document.getElementById("valueInt").value);
    let result = ""

    if (value % 3 == 0 && value % 5 != 0) {
        result = "fizz";
    }
    else if (value % 3 != 0 && value % 5 == 0) {
        result = "buzz";
    }
    else if (value % 3 == 0 && value % 5 == 0) {
        result = "fizzbuzz";
    }
    else if (value % 3 != 0 && value % 5 != 0) {
        result = null;
    }

    console.log(result);
    document.getElementById("endResult").innerText = result;
}

document.getElementById("valueInt").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
        event.preventDefault(); 
        CalculateFizzbuzz(); 
    }
});