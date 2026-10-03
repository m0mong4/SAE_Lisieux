function to_quest(a){
    if (a=='adm'){
        window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSf4iYjDbfWDDgNRVeD5N6KnqSiiCElNn8OhwtKsXjzM8rTY9g/viewform?usp=dialog'
    }
    else{
        window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSfI-V_-eGxrj51Dx_0jzynA5UFWSQiT76qW4AmhZH-KdGqhkA/viewform?usp=dialog'
    }
}

/* -- FAQ -- */
document.addEventListener('DOMContentLoaded', function() {
// Ajout d'un effet de défilement fluide
const links = document.querySelectorAll('.faq-menu a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Scroll fluide vers la question
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
            
            // Mise en évidence temporaire de la question
            targetElement.style.backgroundColor = '#f0f8ff';
            setTimeout(() => {
                targetElement.style.backgroundColor = '';
            }, 1500);
        }
    });
});

// Mise en évidence de la question active dans le menu
window.addEventListener('scroll', function() {
    const questions = document.querySelectorAll('.question-item');
    const menuLinks = document.querySelectorAll('.faq-menu a');
    
    let currentQuestion = '';
    
    questions.forEach(question => {
        const questionTop = question.offsetTop;
        const questionHeight = question.clientHeight;
        
        if (window.scrollY >= (questionTop - 100) && 
            window.scrollY < (questionTop + questionHeight - 100)) {
            currentQuestion = '#' + question.id;
        }
    });
    
    // Mise à jour des liens actifs
    menuLinks.forEach(link => {
        link.style.backgroundColor = '';
        link.style.color = '#2c3e50';
        
        if (link.getAttribute('href') === currentQuestion) {
            link.style.backgroundColor = '#3498db';
            link.style.color = 'white';
        }
    });
});
});

/* -- acces donnees questionnaire et administre -- */
const questionnairesCommunes = [
    { id: "COM-001", date: "2024-01-15", status: "completed", nom: "Commune de Lisieux", nbReponses: 24, description: "Questionnaire complet sur les infrastructures de transport" },
    { id: "COM-002", date: "2024-01-18", status: "completed", nom: "Commune d'Orbec", nbReponses: 18, description: "Évaluation des besoins en mobilité douce" },
    { id: "COM-003", date: "2024-02-02", status: "in-progress", nom: "Commune de Pont-l'Évêque", nbReponses: 12, description: "Enquête sur les transports collectifs" },
    { id: "COM-004", date: "2024-02-10", status: "pending", nom: "Commune de Glos", nbReponses: 8, description: "Analyse des déplacements domicile-travail" },
    { id: "COM-005", date: "2024-02-12", status: "completed", nom: "Commune de Saint-Désir", nbReponses: 22, description: "Bilan des infrastructures cyclables" },
    { id: "COM-006", date: "2024-02-14", status: "in-progress", nom: "Commune de Le Pré-d'Auge", nbReponses: 15, description: "Étude sur le covoiturage" },
    { id: "COM-007", date: "2024-02-16", status: "completed", nom: "Commune de Saint-Pierre-des-Ifs", nbReponses: 19, description: "Questionnaire transport scolaire" },
    { id: "COM-008", date: "2024-02-18", status: "pending", nom: "Commune de La Boissière", nbReponses: 6, description: "Enquête besoins spécifiques" },
    { id: "COM-009", date: "2024-02-20", status: "completed", nom: "Commune de Marolles", nbReponses: 21, description: "Analyse accessibilité PMR" },
    { id: "COM-010", date: "2024-02-22", status: "in-progress", nom: "Commune de La Houblonnière", nbReponses: 14, description: "Étude stationnement" }
];

const questionnairesAdministres = [
    { id: "ADM-001", date: "2024-01-16", status: "completed", nom: "Administré 1", age: 35, description: "Habitue de Lisieux centre, trajets quotidiens vers zone industrielle" },
    { id: "ADM-002", date: "2024-01-19", status: "completed", nom: "Administré 2", age: 42, description: "Résident d'Orbec, utilise voiture pour tous déplacements" },
    { id: "ADM-003", date: "2024-02-03", status: "completed", nom: "Administré 3", age: 28, description: "Jeune actif, utilise vélo et transports en commun" },
    { id: "ADM-004", date: "2024-02-05", status: "completed", nom: "Administré 4", age: 56, description: "Habitant zone rurale, dépendant de la voiture" },
    { id: "ADM-005", date: "2024-02-08", status: "completed", nom: "Administré 5", age: 31, description: "Famille avec enfants, besoin transport scolaire" },
    { id: "ADM-006", date: "2024-02-11", status: "completed", nom: "Administré 6", age: 67, description: "Retraité, déplacements réduits, besoin accessibilité" },
    { id: "ADM-007", date: "2024-02-13", status: "completed", nom: "Administré 7", age: 39, description: "Télétravail partiel, déplacements occasionnels" },
    { id: "ADM-008", date: "2024-02-15", status: "completed", nom: "Administré 8", age: 24, description: "Étudiant, utilise bus et covoiturage" },
    { id: "ADM-009", date: "2024-02-17", status: "completed", nom: "Administré 9", age: 48, description: "Commerçant, déplacements professionnels fréquents" },
    { id: "ADM-010", date: "2024-02-19", status: "completed", nom: "Administré 10", age: 52, description: "Habite en périphérie, souhaite plus de transports" }
];

const administre = [
    { id: "ADM-001", nom: "John", prenom: "Doe", Adresse: "40 rue des lilas"},
    { id: "ADM-002", nom: "Johnathan", prenom: "Doe", Adresse: "39 rue des lilas"}
];

let selectedItem = null;
let selectedType = null;

function getStatusHTML(status) {
    const statusText = {
        'completed': 'Complet',
        'in-progress': 'En cours',
        'pending': 'En attente'
    };
    
    const statusClass = {
        'completed': 'status-completed',
        'in-progress': 'status-in-progress',
        'pending': 'status-pending'
    };
    
    return `<span class="questionnaire-status ${statusClass[status]}">${statusText[status]}</span>`;
}

function displayCommunesQuestionnaires() {
    const container = document.getElementById('communes-list');
    container.innerHTML = '';
    
    questionnairesCommunes.forEach(item => {
        const element = document.createElement('div');
        element.className = 'questionnaire-item';
        element.dataset.id = item.id;
        element.dataset.type = 'commune';
        
        element.innerHTML = `
            <div class="questionnaire-id">${item.nom} (${item.id})</div>
            <div class="questionnaire-date">Date: ${item.date}</div>
            ${getStatusHTML(item.status)}
            <div style="margin-top: 10px; font-size: 0.9em; color: #7d201b;">${item.nbReponses} réponses</div>
        `;
        
        element.addEventListener('click', () => selectQuestionnaire(item.id, 'commune', item));
        container.appendChild(element);
    });
}

function displayAdministresQuestionnaires() {
    const container = document.getElementById('administres-list');
    container.innerHTML = '';
    
    questionnairesAdministres.forEach(item => {
        const element = document.createElement('div');
        element.className = 'questionnaire-item';
        element.dataset.id = item.id;
        element.dataset.type = 'administre';
        
        element.innerHTML = `
            <div class="questionnaire-id">${item.nom} (${item.id})</div>
            <div class="questionnaire-date">Date: ${item.date} | Âge: ${item.age} ans</div>
            ${getStatusHTML(item.status)}
        `;
        
        element.addEventListener('click', () => selectQuestionnaire(item.id, 'administre', item));
        container.appendChild(element);
    });
}

function displayAdministre_only() {
    const container = document.getElementById('administres-list');
    if (!container) return;
    
    container.innerHTML = '';

    administre.forEach(item => {
        const element = document.createElement('div');
        element.className = 'questionnaire-item';
        element.dataset.id = item.id;
        element.dataset.type = 'administre';
        
        element.innerHTML = `
            <div class="questionnaire-id">${item.prenom} ${item.nom} (${item.id})</div>
            <div class="questionnaire-date">Adresse : ${item.Adresse}</div>
        `;
        
        element.addEventListener('click', () => 
            selectQuestionnaire(item.id, "administre_only", item)
        );

        container.appendChild(element);
    });
}


function selectQuestionnaire(id, type, data) {
    document.querySelectorAll('.questionnaire-item.selected').forEach(item => {
        item.classList.remove('selected');
    });
    
    const selectedElement = document.querySelector(`.questionnaire-item[data-id="${id}"][data-type="${type}"]`);
    if (selectedElement) {
        selectedElement.classList.add('selected');
    }
    
    selectedItem = id;
    selectedType = type;
    showQuestionnaireDetails(data, type);
}

function showQuestionnaireDetails(data, type) {
    const detailsSection = document.getElementById('details-section');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');
    
    let title = '';
    let content = '';
    
    if (type === 'commune') {
        title = `Questionnaire ${data.id} - ${data.nom}`;
        content = `
            <p><strong>Date de soumission:</strong> ${data.date}</p>
            <p><strong>Statut:</strong> ${getStatusHTML(data.status).replace('questionnaire-status ', '')}</p>
            <p><strong>Nombre de réponses:</strong> ${data.nbReponses}</p>
            <p><strong>Description:</strong> ${data.description}</p>
            <p><strong>Type:</strong> Questionnaire communal</p>
            <p>Ce questionnaire contient des informations sur les infrastructures, les besoins en transport et les projets de la commune.</p>
        `;
    } else if (type === 'administre') {
        title = `Questionnaire ${data.id} - ${data.nom}`;
        content = `
            <p><strong>Date de soumission:</strong> ${data.date}</p>
            <p><strong>Statut:</strong> ${getStatusHTML(data.status).replace('questionnaire-status ', '')}</p>
            <p><strong>Âge:</strong> ${data.age} ans</p>
            <p><strong>Description:</strong> ${data.description}</p>
            <p><strong>Type:</strong> Questionnaire administré</p>
            <p>Ce questionnaire contient les habitudes de déplacement, les difficultés rencontrées et les suggestions de l'administré.</p>
        `;
    } else if (type === 'administre_only') {
        title = `Administré ${data.id} - ${data.prenom} ${data.nom}`;
        content = `
            <p><strong>Adresse:</strong> ${data.Adresse}</p>
            <p><strong>Type:</strong> Administré inscrit dans la base de données</p>
        `;
    }
    
    detailsTitle.innerHTML = title;
    detailsContent.innerHTML = content;
    detailsSection.classList.add('details-visible');
}

function simulatePrint() {
    alert("Fonction d'impression - Cette fonctionnalité imprimerait les données sélectionnées.");
    console.log(`Impression du questionnaire ${selectedItem} (${selectedType})`);
}

function simulateEdit() {
    if (selectedItem) {
        alert(`Modification du questionnaire ${selectedItem} (${selectedType}) - Cette fonctionnalité permettrait de modifier les données.`);
        console.log(`Modification du questionnaire ${selectedItem} (${selectedType})`);
    } else {
        alert("Veuillez sélectionner un questionnaire à modifier.");
    }
}

function simulateDelete() {
    if (selectedItem) {
        if (confirm(`Êtes-vous sûr de vouloir supprimer le questionnaire ${selectedItem} ?`)) {
            alert(`Questionnaire ${selectedItem} supprimé (simulation).`);
            console.log(`Suppression du questionnaire ${selectedItem} (${selectedType})`);
            selectedItem = null;
            selectedType = null;
            document.querySelectorAll('.questionnaire-item.selected').forEach(item => {
                item.classList.remove('selected');
            });
            document.getElementById('details-section').classList.remove('details-visible');
        }
    } else {
        alert("Veuillez sélectionner un questionnaire à supprimer.");
    }
}

function goBackToMenu() {
    if (confirm("Retourner au menu principal ?")) {
        window.location.href = "menu_connecte.html";
    }
}

/* -- acces modfaq -- */

const faqQuestions = [
    {
        id: "q1",
        number: 1,
        question: "Qu'est-ce que le PLD (Plan Local de Déplacements) ?",
        answer: "Le PLD est un document stratégique qui définit les actions à mettre en place pour organiser et améliorer les déplacements sur le territoire de Lisieux Normandie. Il vise à favoriser des modes de transport plus durables, réduire le trafic automobile et répondre aux besoins réels des habitants et des communes.",
        category: "pld"
    },
    {
        id: "q2",
        number: 2,
        question: "Pourquoi participez-vous à cette étude ?",
        answer: "La communauté d'agglomération souhaite connaître les habitudes et attentes des usagers ainsi que les spécificités de chaque commune. Vos réponses permettront de concevoir un PLD adapté aux réalités locales, garantissant mobilité, accessibilité et durabilité.",
        category: "questionnaires"
    },
    {
        id: "q3",
        number: 3,
        question: "Qui peut répondre aux questionnaires ?",
        answer: "<p><strong>Administrés :</strong> tous les habitants de Lisieux Normandie.</p><p><strong>Communes :</strong> les services municipaux et responsables des infrastructures et des transports.</p>",
        category: "questionnaires"
    },
    {
        id: "q4",
        number: 4,
        question: "Combien de temps faut-il pour répondre aux questionnaires ?",
        answer: "<p><strong>Le questionnaire des administrés</strong> prend environ 5 à 10 minutes.</p><p><strong>Le questionnaire des communes</strong> prend environ 10 à 15 minutes, selon la disponibilité des informations.</p>",
        category: "questionnaires"
    },
    {
        id: "q5",
        number: 5,
        question: "Que va-t-il se passer avec mes réponses ?",
        answer: "Toutes les réponses seront anonymes pour les administrés et confidentielles pour les communes. Elles seront utilisées uniquement pour analyser les besoins de mobilité et élaborer le PLD.",
        category: "questionnaires"
    },
    {
        id: "q6",
        number: 6,
        question: "Quelles informations sont demandées dans le questionnaire des administrés ?",
        answer: "<p>Le questionnaire vise à connaître :</p><ul><li>Les modes de transport utilisés,</li><li>La fréquence et les motifs des déplacements,</li><li>Les difficultés rencontrées,</li><li>Les attentes et suggestions pour améliorer la mobilité.</li></ul>",
        category: "questionnaires"
    },
    {
        id: "q7",
        number: 7,
        question: "Quelles informations sont demandées dans le questionnaire des communes ?",
        answer: "<p>Le questionnaire des communes permet de recenser :</p><ul><li>La population et la structure de la commune,</li><li>Les infrastructures et services existants,</li><li>Les besoins spécifiques en mobilité,</li><li>Les projets ou contraintes locales pour organiser les déplacements.</li></ul>",
        category: "questionnaires"
    },
    {
        id: "q8",
        number: 8,
        question: "Quand sera finalisé le PLD ?",
        answer: "Après la collecte et l'analyse des données, les résultats permettront d'élaborer le PLD. Le calendrier exact sera communiqué par la communauté d'agglomération, mais le processus s'étalera sur plusieurs mois afin de garantir la participation et la précision des informations.",
        category: "pld"
    },
    {
        id: "q9",
        number: 9,
        question: "Comment puis-je obtenir plus d'informations ?",
        answer: "<p>Vous pouvez contacter la communauté d'agglomération Lisieux Normandie via :</p><ul><li>Le site web officiel : <a href='https://www.lisieux-normandie.fr/' target='_blank'>https://www.lisieux-normandie.fr/</a></li><li>Votre mairie ou service local de mobilité</li></ul>",
        category: "autres"
    }
];

let selectedFAQ = null;

function getCategoryName(category) {
    const categories = {
        'pld': 'PLD',
        'questionnaires': 'Questionnaires',
        'transports': 'Transports',
        'infrastructures': 'Infrastructures',
        'autres': 'Autres'
    };
    return categories[category] || category;
}

function displayFAQList() {
    const container = document.getElementById('faq-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    faqQuestions.forEach(item => {
        const element = document.createElement('div');
        element.className = 'questionnaire-item';
        element.dataset.id = item.id;
        
        element.innerHTML = `
            <div class="questionnaire-id">Question ${item.number}: ${item.question}</div>
            <div style="margin-top: 5px; font-size: 0.8em; color: #666;">
                <strong>Réponse:</strong> ${item.answer.substring(0, 100)}${item.answer.length > 100 ? '...' : ''}
            </div>
            <div style="margin-top: 5px; font-size: 0.8em; color: #666;">
                Catégorie: ${getCategoryName(item.category)}
            </div>
        `;
        
        element.addEventListener('click', () => selectFAQ(item.id, item));
        container.appendChild(element);
    });
}

function selectFAQ(id, data) {
    document.querySelectorAll('.questionnaire-item.selected').forEach(item => {
        item.classList.remove('selected');
    });
    
    const selectedElement = document.querySelector(`.questionnaire-item[data-id="${id}"]`);
    if (selectedElement) {
        selectedElement.classList.add('selected');
    }
    
    selectedFAQ = id;
}

function simulateEditFAQ() {
    if (selectedFAQ) {
        const question = faqQuestions.find(q => q.id === selectedFAQ);
        if (question) {
            alert(`Modification de la question ${question.number} - Cette fonctionnalité permettrait de modifier la question et sa réponse.`);
            console.log(`Modification de la question ${selectedFAQ}`);
        }
    } else {
        alert("Veuillez sélectionner une question à modifier.");
    }
}

function simulateDeleteFAQ() {
    if (selectedFAQ) {
        const question = faqQuestions.find(q => q.id === selectedFAQ);
        if (question) {
            if (confirm(`Êtes-vous sûr de vouloir supprimer la question ${question.number} ?`)) {
                alert(`Question ${question.number} supprimée (simulation).`);
                console.log(`Suppression de la question ${selectedFAQ}`);
                selectedFAQ = null;
                
                document.querySelectorAll('.questionnaire-item.selected').forEach(item => {
                    item.classList.remove('selected');
                });
            }
        }
    } else {
        alert("Veuillez sélectionner une question à supprimer.");
    }
}

function addNewFAQQuestion() {
    alert("Fonction d'ajout d'une nouvelle question - Cette fonctionnalité permettrait d'ajouter une nouvelle question à la FAQ.");
    console.log("Ajout d'une nouvelle question à la FAQ");
}

function goBackToMenuFAQ() {
    if (confirm("Retourner au menu principal ?")) {
        window.location.href = "menu_connecte.html";
    }
}

// Initialisation pour la page donneesquestionnaires.html
function donneesquestionnaires(){
    displayCommunesQuestionnaires();
    displayAdministresQuestionnaires();
    
    document.getElementById('btn-print').addEventListener('click', simulatePrint);
    document.getElementById('btn-edit').addEventListener('click', simulateEdit);
    document.getElementById('btn-delete').addEventListener('click', simulateDelete);
    document.getElementById('btn-back').addEventListener('click', goBackToMenu);
}

// Initialisation pour la page administre.html
function initAdministrePage() {
    displayAdministre_only();
    
    document.getElementById('btn-print').addEventListener('click', simulatePrint);
    document.getElementById('btn-edit').addEventListener('click', simulateEdit);
    document.getElementById('btn-delete').addEventListener('click', simulateDelete);
    document.getElementById('btn-back').addEventListener('click', goBackToMenu);
}

// Initialisation pour la page modfaq.html
function initFAQPage() {
    displayFAQList();
    
    const btnEdit = document.getElementById('btn-edit');
    const btnDelete = document.getElementById('btn-delete');
    const btnAdd = document.getElementById('btn-add');
    const btnBack = document.getElementById('btn-back');
    
    if (btnEdit) btnEdit.addEventListener('click', simulateEditFAQ);
    if (btnDelete) btnDelete.addEventListener('click', simulateDeleteFAQ);
    if (btnAdd) btnAdd.addEventListener('click', addNewFAQQuestion);
    if (btnBack) btnBack.addEventListener('click', goBackToMenuFAQ);
    
    // Sélectionner la première question par défaut
    if (faqQuestions.length > 0) {
        selectFAQ(faqQuestions[0].id, faqQuestions[0]);
    }
}