// Taxas de câmbio fixas de exemplo
const exchangeRates = {
  USD: 1, // Dólar americano
  EUR: 0.85, // Euro
  BRL: 5.0, // Real brasileiro
  GBP: 0.75, // Libra esterlina
  JPY: 110.0, // Iene japonês
};

// Função para converter valores
function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  if (!amount || amount <= 0) {
    alert("Por favor, insira um valor válido.");
    return;
  }

  // Converter a moeda de origem para USD
  const amountInUSD = amount / exchangeRates[fromCurrency];

  // Converter de USD para a moeda de destino
  const convertedAmount = amountInUSD * exchangeRates[toCurrency];

  // Exibir o resultado
  const resultElement = document.getElementById("result");
  resultElement.textContent = `${amount} ${fromCurrency} é igual a ${convertedAmount.toFixed(
    2
  )} ${toCurrency}`;
}
