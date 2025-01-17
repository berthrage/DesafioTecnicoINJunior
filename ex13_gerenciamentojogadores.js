let players = [];

document.getElementById("spanNewPlayerDetails").style.display = "none";
document.getElementById("valuePlayerName").style.display = "none";
document.getElementById("valuePlayerAge").style.display = "none";
document.getElementById("valuePlayerPosition").style.display = "none";
document.getElementById("valuePlayerScore").style.display = "none";
document.getElementById("buttonSavePlayer").style.display = "none";

function UpdatePlayersContent() {
  let formattedPlayers = players.map(
    (player, index) =>`${index + 1}º - Nome: ${player.nome}, Idade: ${player.idade}, 
    Posição: ${player.posicao}, 
    Pontuação: ${player.pontuacao}`).join(`<br>`);

  document.getElementById("spanPlayers").innerHTML = formattedPlayers;
}

function NewPlayer() {
  document.getElementById("spanNewPlayerDetails").style.display = "block";
  document.getElementById("valuePlayerName").style.display = "block";
  document.getElementById("valuePlayerAge").style.display = "block";
  document.getElementById("valuePlayerPosition").style.display = "block";
  document.getElementById("valuePlayerScore").style.display = "block";
  document.getElementById("buttonSavePlayer").style.display = "block";
}

function SaveNewPlayer() {

  let name = document.getElementById("valuePlayerName").value;
  let age = parseInt(document.getElementById("valuePlayerAge").value);
  let position = document.getElementById("valuePlayerPosition").value;
  let score = parseInt(document.getElementById("valuePlayerScore").value);

  players.push({ nome: name, idade: age, posicao: position, pontuacao: score });
  UpdatePlayersContent();

  document.getElementById("spanNewPlayerDetails").style.display = "none";
  document.getElementById("valuePlayerName").style.display = "none";
  document.getElementById("valuePlayerAge").style.display = "none";
  document.getElementById("valuePlayerPosition").style.display = "none";
  document.getElementById("valuePlayerScore").style.display = "none";
  document.getElementById("buttonSavePlayer").style.display = "none";
}

document.getElementById("searchPositionInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") { 
      event.preventDefault(); 
      SaveNewPlayer(); 
  }
});

function SearchPosition() {
  let positionSearch = document.getElementById("searchPositionInput").value;
  let playersAtPosition = players.filter(
    (player) => player.posicao == positionSearch
  );

  if (playersAtPosition.length > 0) {
    let result = playersAtPosition.map(
      (player) => `${player.nome} - ${player.idade} anos, ${player.posicao}, Pontuação: ${player.pontuacao}`).join(`\n`);

    let resultStr = `Jogadores encontrados na posição ${positionSearch}:\n${result}`;
    console.log(resultStr);
    alert(resultStr);
  } else {
    let resultStr = `Nenhum jogador encontrado na posição ${positionSearch}.`;
    console.log(resultStr);
    alert(resultStr);
  }
}

document.getElementById("searchPositionInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") { 
      event.preventDefault(); 
      SearchPosition(); 
  }
});

function ListPlayers() {
  if (players.length > 0) {

    let playerList = players.map(
      (player) => `${player.nome} - ${player.idade} anos, ${player.posicao}, Pontuação: ${player.pontuacao}`).join(`\n`);

    let resultStr = `Jogadores cadastrados no time:\n${playerList}`;
    console.log(resultStr);
    alert(resultStr);
  } else {
    let resultStr = `Nenhum jogador cadastrado no time.`;
    console.log(resultStr);
    alert(resultStr);
  }
}

function CalculateAverageScore() {
  if (players.length == 0) {

    let resultStr = `Nenhum jogador cadastrado no time para calcular a pontuação média.`;
    console.log(resultStr);
    alert(resultStr);
    return;
  }

  let totalScore = players.reduce((sum, player) => sum + player.pontuacao, 0);
  let average = totalScore / players.length;
  let resultStr = `A pontuação média dos jogadores é: ${average.toFixed(2)}`;
  console.log(resultStr);
  alert(resultStr);
}

function ExitProgram() {
  document.getElementById("spanTitlePlayers").innerText = `Programa encerrado.`;
  document.getElementById("spanPlayers").style.display = "none";
  document.getElementById("buttonAddPlayer").style.display = "none";
  document.getElementById("buttonSearchPosition").style.display = "none";
  document.getElementById("searchPositionInput").style.display = "none";
  document.getElementById("buttonListPlayers").style.display = "none";
  document.getElementById("buttonCalculateAverageScore").style.display = "none";
  document.getElementById("buttonExit").style.display = "none";
}
