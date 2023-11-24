// Classe Course représentant un cours avec titre, durée et prix
class Course {
  #price; // Champ privé pour le prix

  constructor(title, length, price) {
    this.title = title; // Titre du cours
    this.length = length; // Durée du cours en heures
    this.#price = price; // Prix du cours
  }

  // Méthode pour calculer la valeur du cours (durée/prix)
  calculateValue() {
    return this.length / this.#price;
  }

  // Méthode pour afficher un résumé du cours
  summary() {
    return `Titre: ${this.title}, Durée: ${this.length} heures, Prix: ${this.formattedPrice}`;
  }

  // Getter pour le prix (avec vérification de la positivité)
  get price() {
    return this.#price;
  }

  // Setter pour le prix (ne permet que des valeurs positives)
  set price(value) {
    if (value < 0) {
      throw "Le prix doit être positif.";
    }
    this.#price = value;
  }

  // Getter pour obtenir le prix formaté avec un symbole de dollar
  get formattedPrice() {
    return `$${this.#price}`;
  }
}

// Classe PracticalCourse, dérivée de Course, avec un nombre d'exercices
class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price); // Appel du constructeur de la classe parente
    this.numOfExercises = numOfExercises; // Nombre d'exercices dans le cours pratique
  }
}

// Classe TheoreticalCourse, dérivée de Course, avec une méthode de publication
class TheoreticalCourse extends Course {
  publish() {
    console.log("Publication d'un cours théorique.");
  }
}

// Instanciation des cours
const course1 = new Course("Développement Web", 30, 100);
const course2 = new Course("Introduction à JavaScript", 20, 80);
const practicalCourse = new PracticalCourse("Cours Pratique", 25, 90, 15);
const theoreticalCourse = new TheoreticalCourse("Cours Théorique", 15, 70);

// Affichage des informations sur les cours
console.log(course1.summary());
console.log(course2.summary());
console.log(`Valeur du cours 1: ${course1.calculateValue()}`);
console.log(`Valeur du cours 2: ${course2.calculateValue()}`);

// Affichage des informations sur les cours spécialisés
console.log(practicalCourse);
console.log(theoreticalCourse);
theoreticalCourse.publish(); // Appel de la méthode publish de TheoreticalCourse
