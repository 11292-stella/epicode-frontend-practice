document.addEventListener("DOMContentLoaded", function () {
  // Artisti da visualizzare sulla homepage
  const artisti = [
    {
      id: 412,
      name: "Queen",
      image: "https://api.deezer.com/artist/412/image",
    },
    {
      id: 92,
      name: "Michael Jackson",
      image: "https://api.deezer.com/artist/92/image",
    },
    {
      id: 860,
      name: "Adele",
      image: "https://api.deezer.com/artist/860/image",
    },
    {
      id: 60,
      name: "The Beatles",
      image: "https://api.deezer.com/artist/60/image",
    },
    {
      id: 170,
      name: "Eminem",
      image: "https://api.deezer.com/artist/170/image",
    },
    {
      id: 2535,
      name: "Lady Gaga",
      image: "https://api.deezer.com/artist/2535/image",
    },
  ]

  // Seleziona il contenitore delle card
  const artistCardsContainer = document.getElementById("artist-cards-container")

  // Verifica che l'elemento esista
  if (artistCardsContainer) {
    // Crea e aggiungi una card per ogni artista
    artisti.forEach((artista) => {
      const card = document.createElement("div")
      card.classList.add("col-2", "p-3", "rounded-2")
      card.setAttribute("data-artist-id", artista.id)

      card.innerHTML = `
          <img src="${artista.image}" alt="${artista.name}" class="w-100 rounded-1">
          <h6 class="mt-1 text-light fw-semibold">"${artista.name}"</h6>
          <p class="text-light">Artista Popolare</p>
        `

      // Aggiungi l'evento di click per ogni card
      card.addEventListener("click", () => {
        window.location.href = `/artist.html?id=${artista.id}`
      })

      // Aggiungi la card al contenitore
      artistCardsContainer.appendChild(card)
    })
  } else {
    console.error("Il contenitore per le card non è stato trovato.")
  }
})

document.addEventListener("DOMContentLoaded", function () {
  // Seleziona il contenitore della nuova sezione
  const moreArtistsContainer = document.querySelector("#more-artist-cards")

  // Nuovi artisti da aggiungere
  const moreArtists = [
    {
      id: 13,
      name: "Daft Punk",
      image: "https://api.deezer.com/artist/13/image",
    },
    {
      id: 27,
      name: "Bruno Mars",
      image: "https://api.deezer.com/artist/27/image",
    },
    {
      id: 75798,
      name: "Billie Eilish",
      image: "https://api.deezer.com/artist/75798/image",
    },
    {
      id: 144227,
      name: "Ed Sheeran",
      image: "https://api.deezer.com/artist/144227/image",
    },
    {
      id: 246791,
      name: "Imagine Dragons",
      image: "https://api.deezer.com/artist/246791/image",
    },
  ]

  // Verifica se il contenitore esiste
  if (moreArtistsContainer) {
    // Crea una riga per le card
    const row = document.createElement("div")
    row.classList.add("row", "d-flex", "justify-content-between")

    moreArtists.forEach((artist) => {
      const card = document.createElement("div")
      card.classList.add("col-2", "p-0", "mb-3") // Aggiungi mb-3 per dare un po' di spazio verticale

      card.innerHTML = `
        <div id="card-home-${artist.id}" class="p-1 rounded-2">
          <img class="w-100 rounded-1" src="${artist.image}" alt="${artist.name}">
          <h6 class="mt-2 text-light fw-semibold text-start">${artist.name}</h6>
          <p class="text-light text-start">Artista Consigliato</p>
        </div>
      `

      // Click per andare alla pagina dell'artista
      card.addEventListener("click", () => {
        window.location.href = `album.html?artist_id=${artist.id}`
      })

      // Aggiungi la card alla riga
      row.appendChild(card)
    })

    // Aggiungi la riga di card al contenitore
    moreArtistsContainer.appendChild(row)
  } else {
    console.error(
      "Il contenitore per la sezione 'Altro di ciò che ti piace' non è stato trovato."
    )
  }
})
