// Seleciona o formulário pelo ID
const form = document.getElementById("form");

// Adiciona um evento de envio ao formulário
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Obtém os valores dos campos
  const gender = document.getElementById("gender").value.toUpperCase();
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseInt(document.getElementById("age").value);
  const activity = parseFloat(document.getElementById("activity").value);

  // Verifica se o gênero é válido
  if (gender !== "M" && gender !== "F") {
    alert('Por favor, insira "M" ou "F" para o gênero.'); // Mensagem de erro
    return; // Sai da função se o gênero for inválido
  }

  // Calcula a Taxa de Metabolismo Basal (TMB) com base no gênero
  let bmr;
  if (gender === "M") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Fórmula para masculino
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161; // Fórmula para feminino
  }

  // Calcula o total de calorias
  const totalCalories = bmr * activity;

  // Formata a saída de calorias
  const formattedCalories = `${totalCalories
    .toFixed(2)
    .replace(".", ",")} <span class="unit">Kcal</span>`;
  document.querySelector("#description").innerHTML = formattedCalories; // Exibe as calorias

  // Mostra a div com informações
  const infosDiv = document.getElementById("infos");
  infosDiv.classList.remove("hidden");
});
