let numbers = [2, 3, 2, 4, 4, 5, 5];

document.getElementById("spanArray").innerText = JSON.stringify(numbers);

function EncontrarElementoUnico(array) {
    let counter = {};

    for (let number of array) {
        if (number in counter) {
            counter[number] += 1;
        } else {
            counter[number] = 1;
        }
    }

    for (let number in counter) {
        if (counter[number] == 1) {
            let result = `O elemento único é ${number}`;
            console.log(result);
            document.getElementById("endResult").innerText = result;
        }
    }
}

EncontrarElementoUnico(numbers);


