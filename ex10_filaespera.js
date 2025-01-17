document.getElementById("spanNewClientName").style.display = "none";
document.getElementById("valueNewClientName").style.display = "none";
document.getElementById("buttonAddClient").style.display = "none";

let clients = ['João', 'Maria', 'Bruxa'];

function UpdateClientsContent() {
  let formattedClients = clients.map((client, index) => `${index + 1}º - ${client}`).join('\n');
  document.getElementById("spanClients").innerText = formattedClients;
}

UpdateClientsContent();

function NewClient() {
  document.getElementById("spanNewClientName").style.display = "block";
  document.getElementById("valueNewClientName").style.display = "block";
  document.getElementById("buttonAddClient").style.display = "block";
}

function PushClient(newClientName) {
  clients.push(newClientName);
  UpdateClientsContent();
}

function AddClient() {
  let newClientName = document.getElementById("valueNewClientName").value;

  PushClient(newClientName);
  
  document.getElementById("spanNewClientName").style.display = "none";
  document.getElementById("valueNewClientName").style.display = "none";
  document.getElementById("buttonAddClient").style.display = "none";
}

document.getElementById("valueNewClientName").addEventListener("keydown", function(event) {
  if (event.key === "Enter") { 
      event.preventDefault(); 
      AddClient(); 
  }
});

function ServeClient() {
  clients.shift();
  UpdateClientsContent();
}

function ExitProgram() {
  document.getElementById("spanTitleClients").innerText = `Programa encerrado.`;

  document.getElementById("spanClients").style.display = "none";
  document.getElementById("buttonNewClient").style.display = "none";
  document.getElementById("buttonServeClient").style.display = "none";
  document.getElementById("buttonExitProgram").style.display = "none";
  document.getElementById("spanNewClientName").style.display = "none";
  document.getElementById("valueNewClientName").style.display = "none";
  document.getElementById("buttonAddClient").style.display = "none";
}
