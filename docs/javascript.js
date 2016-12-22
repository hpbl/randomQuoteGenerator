var quotesArray = [
	"Quem corre é a bola. - SANTANA, Elton",
	"Amigão, vá com calma. - SANTANA, Elton",
	"Camisa 10 joga até na chuva. - SANTANA, Elton",
	"\"Tibei. - SANTANA, Elton\" - CHIEN, Fanny",
	"Time que não se mexe não ganha - OLIVEIRA, Daniel",
	"Gal... - PESSOA, Clarissa",
	"Cê tá louco, meu? - CHIEN, Fanny",
	"Oh mano! -CHIEN, Fanny",
	"Caaalma jovem? - GIRL, Barbie",
	"Toda dor engrandece o homem - OLIVEIRA, Daniel",
	"Você é o filé do lado que o boi não deita. - SANTANA, Elton",
	"Tá pensando que a vida é um thunderbolt? - SANTANA, Elton",
	"Se derrame, se der ame. -SANTANA, Elton",
	"Quem perde tempo é o relógio que atrasa. -SANTANA, Elton",
	"Tá ligado?! - PESSOA, Clarissa",
	"Vou jogar verde pra colher maduro. - PESSOA, Clarissa",
	"O mundo é seu. -SANTANA, Elton",
	"O que a gente começa juntos a gente termina juntos - PESSOA, Clarissa",
	"Quem tem teto solar não abre janela. - GIRL, Barbie",
	"A gente balança mas não cai. - DAMASCENA, Isabelly",
	"As melhores fotos estão gravadas no nosso coração. - DAMASCENA, Isabelly",
	"Se você está sem norte seja sua própria bússula. - OLIVEIRA, Daniel",
	"Tô grávido de uma genealidade. - OLIVEIRA, Daniel",
	"Saúde pra quê? Se o destino é a morte? - BARBOSA, Iago",
	"Essa é a beleza da vida, se ver nos outros e os outros em si. - PINTOR, Hilton",
	"De todos os benéficos nem tudo é tão bom - BARBOSA, Iago",
	"Errar não é errado. - CELI, Mariama",
	"Tudo que podemos esperar dessa vida: amar e ser amado. - PINTOR, Hilton",
	"Difícil é encontrar um grande amor o resto é trivial. - SILVA, Arquimedes"

]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotesArray.length))
	
	document.getElementById("quoteDisplay").innerHTML = quotesArray[randomNumber]
}
