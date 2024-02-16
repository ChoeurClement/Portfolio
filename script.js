let texte = {
    francais: {
        aProposTitre: "À propos",
        aProposTexte: "Je suis <span>Clément</span>, un développeur passionné. J'ai un grand intérêt pour l'informatique depuis mon adolescence et j'ai finalement décidé de faire mes études dans la programmation. J'étudie actuellement à l'<span>Université Polytechnique Hauts-de-France</span> pour ma 3ème année. Mon objectif est de créer des <span>applications web</span> et des <span>solutions logicielles</span> intuitives et efficaces qui apportent une valeur ajoutée à leurs utilisateurs. Je suis toujours à la recherche de nouvelles opportunités de développement et je suis ouvert aux collaborations sur des projets intéressants. Si vous souhaitez discuter de projets ou simplement en savoir plus sur mon parcours, n'hésitez pas à me contacter.",
        projetsTitre: "Projets",
        projetsDescription: "Réalisation de mon Portfolio (HMTL, CSS, JavaScript)",
        projetsDate: "<span>Août 2023</span>",
        projetPhotoTitre: "Site web Photographie",
        projetPhotoDescription: "Création d'un site web permettant a son utilisateur de présenter ses photos",
        projetPhotoDate: "<span>Février 2024 -> ???</span>",
        competencesTitre: "Compétences",
        competencesDescription1: "Mes compétences en HTML me permettent de créer des bases solides et sémantiquement correctes pour les sites web. Je suis habitué à traduire des concepts en éléments visuels en utilisant des balises HTML, tout en veillant à ce que l'accessibilité soit une priorité pour tous les utilisateurs.",
        competencesDescription2: "Je maîtrise CSS pour donner vie à des designs web captivants et réactifs. Les sélecteurs, les propriétés et les valeurs sont mes outils pour créer des mises en page esthétiques et cohérentes sur diverses plateformes et tailles d'écran. En outre, j'excelle dans l'utilisation des animations et des transitions CSS pour ajouter des éléments interactifs et attrayants aux interfaces utilisateur, améliorant ainsi l'expérience globale des visiteurs.",
        competencesDescription3: "JavaScript est mon moyen de prédilection pour créer des fonctionnalités web dynamiques et interactives. Je maîtrise les concepts tels que les variables, les fonctions, les boucles et les événements, ce qui me permet de manipuler le DOM et de répondre aux actions des utilisateurs de manière fluide.",
        competencesDescription4: "En SQL, je suis capable de gérer efficacement les bases de données et d'effectuer des opérations cruciales. Je peux créer des requêtes complexes pour récupérer, filtrer et organiser des données de manière efficace. Ma compréhension des jointures, des sous-requêtes et de l'optimisation des requêtes garantit que les applications que je développe peuvent accéder aux informations nécessaires rapidement et de manière fiable, tout en maintenant l'intégrité des données.",
        competencesDescription5: "J'utilise GitHub de manière experte pour gérer efficacement les versions de mes projets, collaborer avec d'autres développeurs et suivre les problèmes et les demandes de fusion. Je maîtrise la gestion du code source et l'utilisation des fonctionnalités de GitHub, telles que les branches et les workflows CI/CD, ce qui m'aide à maintenir un flux de travail de développement fluide et collaboratif.",
        competencesDescription6: "J'ai une solide expérience en développement en PHP, un langage de programmation côté serveur largement utilisé. Je peux créer des applications web robustes et performantes en exploitant la capacité de PHP à interagir avec les bases de données et à gérer la logique côté serveur.",
        competencesDescription7: "Je suis compétent dans le développement d'applications web à l'aide de React, une bibliothèque JavaScript populaire pour la création d'interfaces utilisateur interactives. Je crée des composants React réutilisables et je gère l'état de l'application pour construire des applications réactives et évolutives.",
        competencesDescription8: "Ma maîtrise de Java, un langage de programmation polyvalent, me permet de développer des applications robustes et performantes, qu'il s'agisse d'applications de bureau, d'applications web ou d'applications mobiles. Je suis à l'aise avec les concepts de base de Java, tels que les classes, les objets, les collections et la gestion de la mémoire, ce qui me permet de créer des solutions logicielles de haute qualité."
    },
    anglais: {
        aProposTitre: "About me",
        aProposTexte: "I'm <span>Clément</span>, a passionate developer. I've had a keen interest in computers since I was a teenager, and I finally decided to study programming. I'm currently studying at the <span>Université Polytechnique Hauts-de-France</span> for my 3rd year. My aim is to create <span>intuitive</span> and <span>efficient web applications</span> and <span>software solutions</span> that bring added value to their users. I'm always on the lookout for new development opportunities and am open to collaborating on interesting projects. If you'd like to discuss projects or simply find out more about my background, please don't hesitate to contact me.",
        projetsTitre: "Projects",
        projetsDescription: "Creation of my Portfolio",
        projetsDate: "<span>August 2023</span>",
        projetPhotoTitre: "Website Photography",
        projetPhotoDescription: "Creation of a website allowing users to showcase their photos",
        projetPhotoDate: "<span>February 2024 -> ???</span>",
        competencesTitre: "Skills",
        competencesDescription1: "My HTML skills enable me to create solid, semantically correct foundations for websites. I'm used to translating concepts into visual elements using HTML tags, while ensuring that accessibility is a priority for all users.",
        competencesDescription2: "I master CSS to bring captivating, responsive web designs to life. Selectors, properties and values are my tools for creating aesthetically pleasing, consistent layouts across various platforms and screen sizes. In addition, I excel at using CSS animations and transitions to add engaging, interactive elements to user interfaces, enhancing the overall experience for visitors.",
        competencesDescription3: "JavaScript is my preferred means of creating dynamic, interactive web functionality. I've mastered concepts such as variables, functions, loops and events, enabling me to manipulate the DOM and respond to user actions seamlessly.",
        competencesDescription4: "In SQL, I'm able to manage databases efficiently and perform crucial operations. I can create complex queries to retrieve, filter and organize data efficiently. My understanding of joins, sub-queries and query optimization ensures that the applications I develop can access the necessary information quickly and reliably, while maintaining data integrity.",
        competencesDescription5: "I use GitHub expertly to efficiently manage my project releases, collaborate with other developers and track issues and merge requests. I've mastered source code management and the use of GitHub features such as branches and CI/CD workflows, which helps me maintain a smooth and collaborative development workflow.",
        competencesDescription6: "I have solid development experience in PHP, a widely used server-side programming language. I can create robust, high-performance web applications by exploiting PHP's ability to interact with databases and handle server-side logic.",
        competencesDescription7: "I'm skilled at developing web applications using React, a popular JavaScript library for creating interactive user interfaces. I create reusable React components and manage application state to build responsive and scalable applications.",
        competencesDescription8: "My mastery of Java, a versatile programming language, enables me to develop robust, high-performance applications, whether desktop, web or mobile. I'm comfortable with the basic concepts of Java, such as classes, objects, collections and memory management, which enables me to create high-quality software solutions."
    }
}

// Balise contenant les textes
let aProposTitreElement = document.getElementById("aProposTitre");
let aProposTexteElement = document.getElementById("aProposTexte");
let projetsTitreElement = document.getElementById("projetsTitre");
let projetsDescriptionElement = document.getElementById("projetsDescription");
let projetsDateElement = document.getElementById("projetsDate");
let projetPhotoTitre = document.getElementById("projetPhotoTitre");
let projetPhotoDescription = document.getElementById("projetPhotoDescription");
let projetPhotoDate = document.getElementById("projetPhotoDate");
let competencesTitreElement = document.getElementById("competencesTitre");
let competencesDescription1Element = document.getElementById("competencesDescription1");
let competencesDescription2Element = document.getElementById("competencesDescription2");
let competencesDescription3Element = document.getElementById("competencesDescription3");
let competencesDescription4Element = document.getElementById("competencesDescription4");
let competencesDescription5Element = document.getElementById("competencesDescription5");
let competencesDescription6Element = document.getElementById("competencesDescription6");
let competencesDescription7Element = document.getElementById("competencesDescription7");
let competencesDescription8Element = document.getElementById("competencesDescription8");

// Boutons
let boutonFR = document.getElementById("FR");
let boutonEN = document.getElementById("EN");

// Lange Actuelle
let langueActuelle = "francais";

function miseAJourContenu() {
    aProposTitreElement.textContent = texte[langueActuelle].aProposTitre;
    aProposTexteElement.innerHTML = texte[langueActuelle].aProposTexte;
    projetsTitreElement.textContent = texte[langueActuelle].projetsTitre;
    projetsDescriptionElement.textContent = texte[langueActuelle].projetsDescription;
    projetsDateElement.innerHTML = texte[langueActuelle].projetsDate;
    projetPhotoTitre.textContent = texte[langueActuelle].projetPhotoTitre;
    projetPhotoDescription.textContent = texte[langueActuelle].projetPhotoDescription;
    projetPhotoDate.innerHTML = texte[langueActuelle].projetPhotoDate;
    competencesTitreElement.textContent = texte[langueActuelle].competencesTitre;
    competencesDescription1Element.innerHTML = texte[langueActuelle].competencesDescription1;
    competencesDescription2Element.innerHTML = texte[langueActuelle].competencesDescription2;
    competencesDescription3Element.innerHTML = texte[langueActuelle].competencesDescription3;
    competencesDescription4Element.innerHTML = texte[langueActuelle].competencesDescription4;
    competencesDescription5Element.innerHTML = texte[langueActuelle].competencesDescription5;
    competencesDescription6Element.innerHTML = texte[langueActuelle].competencesDescription6;
    competencesDescription7Element.innerHTML = texte[langueActuelle].competencesDescription7;
    competencesDescription8Element.innerHTML = texte[langueActuelle].competencesDescription8;
}

boutonFR.addEventListener("click", function() {
    langueActuelle = "francais";
    boutonFR.style.backgroundColor = "#71c191";
    boutonFR.style.color = "#060e09";
    boutonEN.style.backgroundColor = "#d1ebdb";
    boutonEN.style.color = "#060e09";
    miseAJourContenu();
})

boutonEN.addEventListener("click", function() {
    langueActuelle = "anglais";
    boutonEN.style.backgroundColor = "#71c191";
    boutonEN.style.color = "#060e09";
    boutonFR.style.backgroundColor = "#d1ebdb";
    boutonFR.style.color = "#060e09";
    miseAJourContenu();
})

// Animation Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));