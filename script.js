// Miss Beauty - Simulador de Compras
// Autora: Kethelyn Reis Sousa

// preços dos produtos (iguais aos do index.html)
var precoBatom = 29.90;
var precoGloss = 24.90;
var precoBlush = 34.90;
var precoIluminador = 39.90;
var precoSerum = 59.90;
var precoLapis = 14.90;
var precoContorno = 37.90;
var precoPaleta = 49.90;
var precoPo = 32.90;
var precoAgua = 27.90;

// mostra o valor em reais, com vírgula (ex.: 29.9 vira R$ 29,90)
function formatar(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}

// confere se a quantidade é válida:
// tem que ser número, não pode ser negativa nem quebrada (ex.: 1.5)
function quantidadeValida(quantidade) {
  if (isNaN(quantidade) || quantidade < 0 || quantidade % 1 !== 0) {
    return false;
  } else {
    return true;
  }
}

// função chamada pelo botão "Simular compra"
function simularCompra() {

  // texto que se repete em todas as perguntas
  var pergunta = "\nQuantas unidades você quer? (0 para não comprar)";

  // pergunta a quantidade de cada produto e converte com Number()
  var qtdBatom = Number(prompt("Batom Cremoso Rosé - " + formatar(precoBatom) + pergunta));
  var qtdGloss = Number(prompt("Gloss Labial Cristal - " + formatar(precoGloss) + pergunta));
  var qtdBlush = Number(prompt("Blush Compacto Rosa Antigo - " + formatar(precoBlush) + pergunta));
  var qtdIluminador = Number(prompt("Iluminador Perolado - " + formatar(precoIluminador) + pergunta));
  var qtdSerum = Number(prompt("Sérum Facial Vitamina C - " + formatar(precoSerum) + pergunta));
  var qtdLapis = Number(prompt("Lápis de Olho Preto - " + formatar(precoLapis) + pergunta));
  var qtdContorno = Number(prompt("Contorno em Bastão - " + formatar(precoContorno) + pergunta));
  var qtdPaleta = Number(prompt("Paleta de Sombras Lavanda - " + formatar(precoPaleta) + pergunta));
  var qtdPo = Number(prompt("Pó Facial Translúcido - " + formatar(precoPo) + pergunta));
  var qtdAgua = Number(prompt("Água Micelar 200 ml - " + formatar(precoAgua) + pergunta));

  // se alguma quantidade for inválida, avisa e encerra a simulação
  if (quantidadeValida(qtdBatom) === false ||
      quantidadeValida(qtdGloss) === false ||
      quantidadeValida(qtdBlush) === false ||
      quantidadeValida(qtdIluminador) === false ||
      quantidadeValida(qtdSerum) === false ||
      quantidadeValida(qtdLapis) === false ||
      quantidadeValida(qtdContorno) === false ||
      quantidadeValida(qtdPaleta) === false ||
      quantidadeValida(qtdPo) === false ||
      quantidadeValida(qtdAgua) === false) {
    alert("Valor inválido! Digite apenas números inteiros, de 0 para cima. A simulação foi encerrada.");
    return;
  }

  // calcula o subtotal: preço x quantidade de cada produto
  var subtotal = precoBatom * qtdBatom +
                 precoGloss * qtdGloss +
                 precoBlush * qtdBlush +
                 precoIluminador * qtdIluminador +
                 precoSerum * qtdSerum +
                 precoLapis * qtdLapis +
                 precoContorno * qtdContorno +
                 precoPaleta * qtdPaleta +
                 precoPo * qtdPo +
                 precoAgua * qtdAgua;

  // se o subtotal for 0, nenhum produto foi escolhido
  if (subtotal === 0) {
    alert("Nenhum produto foi selecionado.");
    return;
  }

  // desconto de 7% só para compras de R$ 270,00 ou mais pagas no Pix
  var desconto = 0;
  if (subtotal >= 270) {
    var forma = prompt("Seu subtotal é " + formatar(subtotal) + ".\nQual a forma de pagamento? (Pix, Cartão ou Dinheiro)");
    if (forma === "Pix" || forma === "pix" || forma === "PIX") {
      desconto = subtotal * 0.07;
    }
  }

  var total = subtotal - desconto;

  // monta o resumo mostrando só os produtos com quantidade maior que 0
  var resumo = "RESUMO DA COMPRA - MISS BEAUTY\n\n";

  if (qtdBatom > 0) {
    resumo = resumo + "Batom Cremoso Rosé: " + qtdBatom + " un. = " + formatar(precoBatom * qtdBatom) + "\n";
  }
  if (qtdGloss > 0) {
    resumo = resumo + "Gloss Labial Cristal: " + qtdGloss + " un. = " + formatar(precoGloss * qtdGloss) + "\n";
  }
  if (qtdBlush > 0) {
    resumo = resumo + "Blush Compacto Rosa Antigo: " + qtdBlush + " un. = " + formatar(precoBlush * qtdBlush) + "\n";
  }
  if (qtdIluminador > 0) {
    resumo = resumo + "Iluminador Perolado: " + qtdIluminador + " un. = " + formatar(precoIluminador * qtdIluminador) + "\n";
  }
  if (qtdSerum > 0) {
    resumo = resumo + "Sérum Facial Vitamina C: " + qtdSerum + " un. = " + formatar(precoSerum * qtdSerum) + "\n";
  }
  if (qtdLapis > 0) {
    resumo = resumo + "Lápis de Olho Preto: " + qtdLapis + " un. = " + formatar(precoLapis * qtdLapis) + "\n";
  }
  if (qtdContorno > 0) {
    resumo = resumo + "Contorno em Bastão: " + qtdContorno + " un. = " + formatar(precoContorno * qtdContorno) + "\n";
  }
  if (qtdPaleta > 0) {
    resumo = resumo + "Paleta de Sombras Lavanda: " + qtdPaleta + " un. = " + formatar(precoPaleta * qtdPaleta) + "\n";
  }
  if (qtdPo > 0) {
    resumo = resumo + "Pó Facial Translúcido: " + qtdPo + " un. = " + formatar(precoPo * qtdPo) + "\n";
  }
  if (qtdAgua > 0) {
    resumo = resumo + "Água Micelar 200 ml: " + qtdAgua + " un. = " + formatar(precoAgua * qtdAgua) + "\n";
  }

  resumo = resumo + "\nSubtotal: " + formatar(subtotal);
  resumo = resumo + "\nDesconto: " + formatar(desconto);
  resumo = resumo + "\nTOTAL FINAL: " + formatar(total);

  alert(resumo);
}
