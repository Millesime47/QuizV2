class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }
  let questions = [
    new Question("Quel est le 6e Président de la Ve République française ?", ["Jacque Chirac", "Nicolas Sarkozy", "Emmanuel Macron", "François Hollande"], "Nicolas Sarkozy"),
    new Question("C'est quoi youtube ?", ["Un Site de E-commerce","un site web d’hébergement de vidéos", "Un site d'hébergement web", "Une montre connnecté"], "un site web d’hébergement de vidéos"),
    new Question("Dans quelle ville le Parlement européen se situe-t-il   ?", ["Paris","Rio", "New York", "Bruxelles"], "Bruxelles"),
    new Question("Quel groupe chante (Smells Like Teen Spirit) ?", ["Nirvana","Harvey Specter", "Mozart", "Angèle"], "Nirvana"),
    new Question("où ce situe la tour Eiffel ?", ["Lyon","Marseille", "Paris", "Marmande"], "Paris"),
    new Question("Qui a gagné la coupe du monde de football en 1998 ?", ["Belgique","Italie", "Brésil", "France"], "France"),
    new Question("La date de la mort de Jean Jaures ?", ["28 avril 2009","31 juillet 1914", "8 juin 1870", "6 juin 1944"], "31 juillet 1914"),
    new Question("Quel est l'artiste qui chante Balance Ton Quoi ?", ["Le Grand JD","Angèle", "Nirvana", "Vanessa Paradis"], "Angèle"),
    new Question("Quelle est la meilleure ville de france :)", ["Paris","Marmande ;)", "Lyon", "Annecy"], "Marmande ;)"),
    new Question("Qui est le personnage principal dans la série les Peaky Blinders ?", ["Tommy Shelby","Arthur Shelby", " Barack Obama", "Donald"], "Tommy Shelby"),
    new Question("Qui a offert la statue de la liberté aux Etats-Unis ?", ["La France","L'Autriche", "L'Espagne", "L'Italie"], "La France"),
    // new Question("Qui a inventé les transports en communs modernes ?" ["Séraphin Lampion","Blaise Pascal", "René Descartes", "Eugène Poubelle"], "Blaise Pascal"),
    new Question("Qui était le premier président de la république ?", ["Adolphe Thiers","Charles de Gaulle", "Raymond Poincaré", "Louis-Napoléon Bonaparte"], "Louis-Napoléon Bonaparte"),
    new Question("Que fête t-on le 14 juillet en France ?", ["La fête de la fédération","L'armistice de la guerre 14-18", "Le début de la V° république", "La prise de la Bastille"], "La fête de la fédération"),
    new Question("Quel arbre est connu pour être le plus grand au monde ?", ["Le chêne","Le séquoia", "Le pin", "Le hêtre"], "Le séquoia"),
    new Question("Au Moyen-Âge, comment appelait-on les villages fortifiés ?", ["Tour","Bastide", "Château fort", "Rempart"], "Bastide"),
    new Question("Quelle est la capitale de la Nouvelle-Zélande ?", ["Turin","Rome", "New York", "Wellington"], "Wellington"),
    new Question("De quelle série de six films un champion de boxe est-il la vedette ?", ["Rambo","Randy", "Rocky", "Ritchie"], "Rocky"),
    new Question("Quel titre de noblesse est immédiatement inférieur à celui de comte ?", ["Archiduc","Marquis", "Vicomte", "Duc"], "Vicomte"),
    new Question("Dans quel pays se trouve le circuit automobile de Zandvoort ?", ["La Belgique","La Suisse", "Les Pays-Bas", "La France"], "Les Pays-Bas"),
    new Question("Avec quel autre animal vit généralement une oie ?", ["Le canard","Le jars", "Le cygne", "La poule"], "Le jars"),
    new Question("Date de création de google ?", ["8 mai 1968","1 septembre 1939", "4 septembre 1998", "7 mai 1763"], "4 septembre 1998"),
    new Question("Combien de bandes y a-t-il sur le drapeau américain ?", ["13","25", "89", "1000"], "13"),
    new Question("Quel est l'animal national de l'Australie ?", ["le requin","le corbeau", "le chat", "kangourou"], "kangourou"),
    new Question("En combien de jours la Terre tourne-t-elle autour du Soleil ?", ["24 jours","1 jour", "365 jours", "200 jours"], "365 jours"),
    new Question("Jusqu’en 1923, comment s’appelait la ville turque d’Istanbul ?", ["Turin","Rome", "Alger", "Constantinople"], "Constantinople"),
    new Question("De quelle ville Billie Eilish est-elle originaire ?", ["Los Angeles","Liverpool", "New York", "Ottawa"], "Los Angeles"),
    // new Question("", ["Turin","Rome", "New York", "Marmande"], "Rome"),
    // new Question("Capital de l'Italie ?", ["Turin","Rome", "New York", "Marmande"], "Rome"),
    // new Question("Capital de l'Italie ?", ["Turin","Rome", "New York", "Marmande"], "Rome"),
    // new Question("Capital de l'Italie ?", ["Turin","Rome", "New York", "Marmande"], "Rome"),
    // new Question("Capital de l'Italie ?", ["Turin","Rome", "New York", "Marmande"], "Rome"),
    // new Question("Capital de l'Italie ?", ["Turin","Rome", "New York", "Marmande"], "Rome"),
    // new Question("Capital de l'Italie ?", ["Turin","Rome", "New York", "Marmande"], "Rome"),
    // new Question("Capital de l'Italie ?", ["Turin","Rome", "New York", "Marmande"], "Rome"),
  ];

  function message(){
    return "hello world"
  }
  
  console.log(questions);
  
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
      }
      this.currentQuestionIndex++;
    }
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  }
  
  // Regroup all  functions relative to the App Display
  const display = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },
    endQuiz: function() {
      endQuizHTML = `
        <h1>Quiz terminé !</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
      this.elementShown("quiz", endQuizHTML);
    },
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
  
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      // display choices and handle guess
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };
  
  // Game logic
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }
  // Create Quiz
  let quiz = new Quiz(questions);
  quizApp();
  
  console.log(quiz);