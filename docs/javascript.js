var quotesArray = [
	"Quem corre é a bola. -SANTANA, Elton",
	"Amigão, vá com calma. -SANTANA, Elton",
	"Camisa 10 joga até na chuva. -SANTANA, Elton",
	"\"Tibei. -SANTANA, Elton\" -CHIEN, Fanny",
	"Time que não se mexe não ganha -OLIVEIRA, Daniel",
	"Gal... -PESSOA, Clarissa",
	"Cê tá louco, meu? -CHIEN, Fanny",
	"Oh mano! -CHIEN, Fanny",
	"Caaalma jovem? -GIRL, Barbie",
	"Toda dor engrandece o homem -OLIVEIRA, Daniel"
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotesArray.length))
	
	document.getElementById("quoteDisplay").innerHTML = quotesArray[randomNumber]
}
