// Application de gestion de films

// Sélection des éléments du bouton dans le DOM
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

// Tableau pour stocker les objets de films
const movies = [];

/**
 * Fonction pour afficher les films sur la page.
 * @param {string} filter - Filtre pour rechercher dans les titres de films.
 */
const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  // Cache la liste si aucun film n'est présent
  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  // Nettoie la liste de films avant de l'afficher
  movieList.innerHTML = "";

  // Filtre les films si un terme de filtre est fourni
  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  // Crée et affiche chaque film dans la liste
  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    let { getFormattedTitle } = movie;
    let text = getFormattedTitle.apply(movie) + " - ";
    for (const key in info) {
      if (key !== "title" && key !== "_title") {
        text += `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

/**
 * Gère l'ajout d'un nouveau film.
 */
const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  // Vérifie si les champs supplémentaires sont vides
  if (extraName.trim() === "" || extraValue.trim() === "") {
    return;
  }

  // Crée un nouvel objet film avec des informations et un ID uniques
  const newMovie = {
    info: {
      // Utilise getters et setters pour valider et définir le titre
      set title(val) {
        if (val.trim() === "") {
          this._title = "DEFAULT";
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    // Méthode pour obtenir le titre formaté
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);

  // Ajoute le nouveau film au tableau et rafraîchit la liste
  movies.push(newMovie);
  renderMovies();
};

/**
 * Gère la recherche de films.
 */
const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

// Ajoute des écouteurs d'événements aux boutons
addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
