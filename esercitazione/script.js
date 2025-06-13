const cambioTitoloH1 = function () {
  const h1New = document.getElementsByTagName("h1")[0]

  h1New.innerText = "Ecco il nuovo H1"
}
cambioTitoloH1()

const aggiungoH2 = function () {
  const nuovo = document.getElementsByTagName("header")[0]
  const creo = document.createElement("h2")
  creo.innerText = "nuovo h2"
  nuovo.appendChild(creo)
}
aggiungoH2()

const selectAllp = function () {
  const select = document.querySelectorAll("div p")
  for (let i = 0; i < select.length; i++) select[i].style.color = "red"
}
selectAllp()

const nava = function () {
  const nuovoA = document.getElementById("menu")
  const dentroA = document.createElement("a")
  dentroA.setAttribute("href", "#")
  dentroA.textContent = "nuovolink"
  nuovoA.appendChild(dentroA)
}
nava()

const cliccki = function () {
  console.log("bottone clicclatooo")
}

for (i = 0; i < 10; i++) {}
console.log(i)
