
document.getElementById("imc-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const sexo = document.getElementById("sexo").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (!peso || !altura) {
      document.getElementById("resultado").innerText = "Por favor, preencha todos os campos corretamente.";
      return;
  }

  const imc = (peso / (altura ** 2)).toFixed(2);
  let mensagem = `Seu IMC é ${imc}. `;

  if (sexo === "feminino") {
      if (imc < 18.5) {
          mensagem += "Abaixo do peso para mulheres.";
      } else if (imc < 24.0) {
          mensagem += "Peso normal para mulheres.";
      } else if (imc < 29.0) {
          mensagem += "Sobrepeso para mulheres.";
      } else {
          mensagem += "Obesidade para mulheres.";
      }
  } else if (sexo === "masculino") {
      if (imc < 20.0) {
          mensagem += "Abaixo do peso para homens.";
      } else if (imc < 25.0) {
          mensagem += "Peso normal para homens.";
      } else if (imc < 30.0) {
          mensagem += "Sobrepeso para homens.";
      } else {
          mensagem += "Obesidade para homens.";
      }
  }

  document.getElementById("resultado").innerText = mensagem;
});