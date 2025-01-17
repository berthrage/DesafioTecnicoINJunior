function CalculateRoots() {
    let a = parseFloat(document.getElementById("valueA").value);
    let b = parseFloat(document.getElementById("valueB").value);
    let c = parseFloat(document.getElementById("valueC").value);
    let delta = 0;
    delta = b**2 - 4 * a * c;
    let spanDelta = document.getElementById("delta");
    spanDelta.innerText = delta;

    let spanRoot1 = document.getElementById("root1");
    let spanRoot2 = document.getElementById("root2");

    if (delta == 0) {
            let root1 = (-b) / (2 * a);
            spanRoot1.innerText = root1.toFixed(2);;
            spanRoot2.innerText = "Não existe."
            console.log(`Raíz 1 ${n} é ${root1}`);
            console.log(`Raíz 2 não existe.`);
    }
    else if (delta > 0) {
        let root1 = (-b + Math.sqrt(delta)) / (2 * a);
        let root2 = (-b - Math.sqrt(delta)) / (2 * a);
        spanRoot1.innerText = root1.toFixed(2);
        console.log(`Raíz 1 ${n} é ${root1}`);
        spanRoot2.innerText = root2.toFixed(2); 
        console.log(`Raíz 2 ${n} é ${root2}`);
    }
    else {
        spanRoot1.innerText = "Não existe."
        spanRoot2.innerText = "Não existe."
        console.log(`Raízes não existem.`);
    }
}