const $d = document,
	$resultado = $d.querySelector("h1"),
	$dado1 = $d.querySelector(".img1"),
	$dado2 = $d.querySelector(".img2"),
	$boton = $d.querySelector("#jugar")

function numeroAleatorio(max, min) {
	return Math.round(Math.random() * (max - min) + min)
}

function lanzarDados() {
	let numero1 = numeroAleatorio(6, 1)
	let numero2 = numeroAleatorio(6, 1)
	$dado1.src = `imagenes/dado${numero1}.png`
	$dado2.src = `imagenes/dado${numero2}.png`

	if (numero1 > numero2) {
		const texto = "&#128681 Gana el jugador 1"
		$resultado.innerHTML = texto
	} else if (numero2 > numero1) {
		const texto = "Gana el jugador 2 &#128681"
		$resultado.innerHTML = texto
	} else {
		const texto = "Empate!"
		$resultado.innerHTML = texto
	}
}

$boton.addEventListener("click", lanzarDados)

$d.addEventListener("DOMContentLoaded", lanzarDados)
