document.getElementById("spanQuantity").style.display = "block";
document.getElementById("valueQuantity").style.display = "block";
document.getElementById("buttonAddQuantity").style.display = "block";
document.getElementById("spanNewNumber").style.display = "none";
document.getElementById("valueNewNumber").style.display = "none";
document.getElementById("buttonAddNumber").style.display = "none";
document.getElementById("spanResult").style.display = "none";

let numbers = [];
let quantity = 0;

function UpdateNumbersContent() {
    let formattedNumbers = numbers.join(', ');
    document.getElementById("spanNumbers").innerText = formattedNumbers;
}

function ConfirmQuantity() {
    quantity = parseInt(document.getElementById("valueQuantity").value);
    document.getElementById("spanQuantity").style.display = "none";
    document.getElementById("valueQuantity").style.display = "none";
    document.getElementById("buttonAddQuantity").style.display = "none";

    document.getElementById("spanNewNumber").style.display = "block";
    document.getElementById("valueNewNumber").style.display = "block";
    document.getElementById("buttonAddNumber").style.display = "block";
}

document.getElementById("valueQuantity").addEventListener("keydown", function(event) {
  if (event.key === "Enter") { 
      event.preventDefault(); 
      ConfirmQuantity(); 
  }
});

function AddNumber() {
    let newNumber = parseInt(document.getElementById("valueNewNumber").value);

    if (numbers.length < quantity) {
        document.getElementById("spanNewNumber").innerText = `\nInsira o número ${numbers.length + 1} do array:`
        numbers.push(newNumber);
        UpdateNumbersContent();
        document.getElementById("valueNewNumber").value = '';

        if (numbers.length === quantity) {
            document.getElementById("spanNewNumber").style.display = "none";
            document.getElementById("valueNewNumber").style.display = "none";
            document.getElementById("buttonAddNumber").style.display = "none";

            CheckOrder();
        }
    }
}

document.getElementById("valueNewNumber").addEventListener("keydown", function(event) {
  if (event.key === "Enter") { 
      event.preventDefault(); 
      AddNumber(); 
  }
});

function CheckOrder() {
    let count = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[i - 1]) {
            count++;
        }
    }

    let result = `${count} números estão em ordem crescente em relação ao anterior.`;
    document.getElementById("spanResult").style.display = "inline";
    document.getElementById("endResult").innerText = result;
    console.log(result);
}


