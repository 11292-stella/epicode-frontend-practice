document.addEventListener("DOMContentLoaded", async () => {
  const apiURL = "URL_DELLA_TUA_API" // Sostituisci con il vero endpoint
  const artistContainer = document.getElementById("artist-cards-container")
  const cardContainer = document.querySelector(
    ".row.d-flex.flex-wrap.justify-content-between"
  ) // Sezione per le nuove card

  try {
    const response = await fetch(apiURL)
    const data = await response.json()

    if (data && data.artists) {
      // Prendiamo i primi 6 per "Buonasera"
      const firstSixArtists = data.artists.slice(0, 6)
      firstSixArtists.forEach((artist) => {
        const card = createArtistCard(artist)
        artistContainer.appendChild(card)
      })

      // Prendiamo gli altri artisti per la sezione album
      const moreArtists = data.artists.slice(6)
      moreArtists.forEach((artist) => {
        const albumCard = createAlbumCard(artist)
        cardContainer.appendChild(albumCard)
      })
    }
  } catch (error) {
    console.error("Errore nel recupero dati:", error)
  }
})

// Funzione per creare le card degli artisti (sezione "Buonasera")
function createArtistCard(artist) {
  const div = document.createElement("div")
  div.classList.add("col-2", "p-0")
  div.innerHTML = `
      <div id="card-home" class="p-1 rounded-2">
          <img class="w-100 rounded-1" src="${artist.image}" alt="${artist.name}">
          <h6 class="mt-2 text-light fw-semibold text-start">${artist.name}</h6>
          <p class="text-light text-start">Ascolta ora</p>
      </div>`
  return div
}

// Funzione per creare le card degli album (sezione "Altro di ciò che può interessarti")
function createAlbumCard(artist) {
  const div = document.createElement("div")
  div.classList.add("col-2", "p-0")
  div.innerHTML = `
      <div id="card-home" class="p-1 rounded-2">
          <a href="album.html?id=${artist.albumId}">
              <img class="w-100 rounded-1" src="${artist.image}" alt="${artist.name}">
          </a>
          <h6 class="mt-2 text-light fw-semibold text-start">${artist.name}</h6>
          <p class="text-light text-start">Scopri l'album</p>
      </div>`
  return div
}
