//  *** Etape 1 ***
//    const motApplication = "Bonjour"

// let motUtilisateur = prompt("Emtrez un mot : " + motApplication)

// // if (motUtilisateur === motApplication) {
// //     console.log("Bravo !!!")
// // } else {
// //     console.log("Vous avez fait une erreur de frappe.")
// // }

// switch (motUtilisateur){
//     case (motApplication) :
//         console.log("Bravo !!!")
//         break
//     case "Gredin" :
//         console.log("Restez correct !")
//         break
//     case "Mécréant" :
//         console.log("C'est celui qui dit qui est !")
//         break
//     case "Vilain" :
//         console.log("Soyez gentil !")
//         break
//     case "Fils de pute" :
//         console.log("On avait dit : PAS LES MAMANS !!!")
//         break
//     default:
//         console.log("Vous avez fait une erreur de frappe.")
// }
// }


// *** etape 2 a ma façon ***

// const listeMots = ["Cachalot", "Pétunia", "Serviette"]
// let score = 0

// let motUtilisateur =prompt("Emtrez un mot : " + listeMots[0])

// if (motUtilisateur === listeMots[0]) {
//         console.log("Bravo !!!")
//         console.log(score+=1) // score++
//     } else {
//         console.log("Vous avez fait une erreur de frappe.")
//     }

// motUtilisateur =prompt("Emtrez un mot : " + listeMots[1])

// if (motUtilisateur === listeMots[1]) {
//         console.log("Bravo !!!")
//         console.log(score+=1) // score++
//     } else {
//         console.log("Vous avez fait une erreur de frappe.")
//     }

// motUtilisateur =prompt("Emtrez un mot : " + listeMots[2])

// if (motUtilisateur === listeMots[2]) {
//         console.log("Bravo !!!")
//         console.log(score+=1) // score++
//     } else {
//         console.log("Vous avez fait une erreur de frappe.")
//     }

// console.log(score)

// *** CORRECTION ***

// // Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
// const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
// let score = 0

// // Déclaration de la variable contenant le mot saisi par l'utilisateur
// // Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
// let motUtilisateur = prompt('Entrez le mot : ' + listeMots[0])

// // Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
// if (motUtilisateur === listeMots[0]) {
//     score++
// }

// // Idem avec le second mot du tableau
// // Notez l'absence du "let" devant la déclaration de la variable "motUtilisateur", cela permet de réutiliser la variable déclarée précédemment
// motUtilisateur = prompt('Entrez le mot : ' + listeMots[1])
// if (motUtilisateur === listeMots[1]) {
//     score++
// }

// // Idem avec le troisième mot du tableau
// motUtilisateur = prompt('Entrez le mot : ' + listeMots[2])
// if (motUtilisateur === listeMots[2]) {
//     score++
// }

// // Affichage du score de l'utilisateur
// console.log("Votre score est de " + score + " sur 3")


// *** Etape 3 ***


// // Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
// const listeMots = ['Cachalot', 'Pétunia', 'Serviette']

// const listePhrase = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson" ]
// let score = 0

// // Déclaration de la variable contenant le mot saisi par l'utilisateur
// // Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot

// let choix = prompt("veuillez choisir la liste : Mots ou Phrases")
// while (choix != "Mots" && choix != "Phrases"){
//     choix = prompt("veuillez choisir la liste : Mots ou Phrases")
// }

// if (choix === "Mots"){
//     for(let i=0; i<listeMots.length; i++){

//         let motUtilisateur = prompt('Entrez le mot : ' + listeMots[i])
//         if (motUtilisateur === listeMots[i]) {
//             score++
//         }
//     }
//     console.log("Votre score est de " + score + " sur " + listeMots.length)
// } else {
//     for(let i=0; i<listePhrase.length; i++){

//         let motUtilisateur = prompt('Entrez le mot : ' + listePhrase[i])
//         if (motUtilisateur === listePhrase[i]) {
//             score++
//         }
//     }
//     console.log("Votre score est de " + score + " sur " + listePhrase.length)
// }

// *** Etape 4 ***

// /*********************************************************************************
//  * 
//  * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
//  * 
//  *********************************************************************************/

// /**
//  * Cette fonction affiche dans la console le score de l'utilisateur
//  * @param {number} score : le score de l'utilisateur
//  * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
//  */

// function afficherResultat(score, nbInstance){
//     let spanScore = document.querySelector(".zoneScore span");
//     let result = `${score} / ${nbInstance}`
//     spanScore.innerText = result
// }

// /**
//  * Cette fonction demande à l'utilisateur de choisir entre "mots" et "phrases" et retourne le choix de l'utilisateur
//  * @return {string} : le choix de l'utilisateur, ce choix est nécessairement "mots" ou "phrases
//  */

// // function choisirPhrasesOuMots(){
// //     let choix = prompt("veuillez choisir la liste : Mots ou Phrases")
// //         while (choix != "Mots" && choix != "Phrases"){
// //             choix = prompt("veuillez choisir la liste : Mots ou Phrases")
// //         }
// //         return choix
// // }

// /**
//  * Cette fonction lance la boucle de jeu, c'est à dire qu'elle demande à l'utilisateur de saisir tous les mots
//  * contenus dans le tableau listeProposition. A chaque mot saisi, on incrémente le score de l'utilisateur
//  * 
//  * @param {array[string]} listeProposition 
//  * @return {number} : le score de l'utilisateur
//  */


// function lancerBoucleJeu(listeProposition){
//     let score = 0
//         // On parcourt le tableau des mots
//         for (let i = 0; i < listeProposition.length; i++) {
//             // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
//             // let motUtilisateur = prompt("Entrez le mot : " + listeProposition[i])
//             if (motUtilisateur === listeProposition[i]) {
//                 // Si le mot saisi par l'utilisateur est correct, on incrémente le score
//                 score++
//             }
//         }
//         return score
//     } 

// /**
//  * Cette fonction lance le jeu. 
//  * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
// */

// function lancerJeu(){
//     //  let choix = choisirPhrasesOuMots()
//     let score = 0
    
//     let i = 0
    
//     function afficherProposition(proposition){
//         let zoneProposition = document.querySelector(".zoneProposition");
//         zoneProposition.innerText = proposition
    
//     }


//         let btnValiderMot = document.getElementById("btnValiderMot");
//         let inputEcriture = document.getElementById("inputEcriture");
//         afficherProposition(listeProposition[i])
//         btnValiderMot.addEventListener("click", () =>{
//             console.log(inputEcriture.value)
//             if (inputEcriture.value === listeProposition[i]){
//                 score++
//             }
//                 i++
//                 afficherResultat(score, i)
//                 inputEcriture.value = ""
//                 if(listeProposition[i]=== undefined){
//                     afficherProposition("le jeu est fini")
//                     btnValiderMot.disabled = true
//                 } else {
//                     afficherProposition(listeProposition[i])
//                 }
            
//             })
    
//             afficherResultat(score, i)
//     }


// 

// // *** Etape 6 ***

// /*********************************************************************************
//  * 
//  * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
//  * 
//  *********************************************************************************/

// /**
//  * Cette fonction affiche dans la console le score de l'utilisateur
//  * @param {number} score : le score de l'utilisateur
//  * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
//  */

// function afficherResultat(score, nbInstance){
//     let spanScore = document.querySelector(".zoneScore span");
//     let result = `${score} / ${nbInstance}`
//     spanScore.innerText = result
// }

// /**
//  * Cette fonction affiche une proposition, que le joueur devra recopier, 
//  * dans la zone "zoneProposition"
//  * @param {string} proposition : la proposition à afficher
//  */

//     function afficherProposition(proposition){
//         let zoneProposition = document.querySelector(".zoneProposition");
//         zoneProposition.innerText = proposition
//     }

// /**
//  * Cette fonction construit et affiche l'email. 
//  * @param {string} nom : le nom du joueur
//  * @param {string} email : l'email de la personne avec qui il veut partager son score
//  * @param {string} score : le score. 
//  */
// function afficherEmail(nom, email, score) {
//     let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
//     location.href = mailto
// }

//     /**
//  * Cette fonction lance le jeu. 
//  * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
//  */

//     function lancerJeu(){
        
//         initAddEventListenerPopup()
//         let score = 0
//         let i = 0
//         let listeProposition = listeMots


//         let btnValiderMot = document.getElementById("btnValiderMot");
//         let inputEcriture = document.getElementById("inputEcriture");

//         afficherProposition(listeProposition[i])

//         btnValiderMot.addEventListener("click", () =>{ 
//             if (inputEcriture.value === listeProposition[i]){
//                 score++
//             }
//             i++
//             afficherResultat(score, i)
//             inputEcriture.value = ''
//             if(listeProposition[i]=== undefined){
//                 afficherProposition("le jeu est fini")
//                 btnValiderMot.disabled = true
//             } else {
//                 afficherProposition(listeProposition[i])
//             }
            
//             })

//             let listeBtnRadio = document.querySelectorAll(".optionSource input")
//             for (let index =0; index < listeBtnRadio.length; index++ ) {
//                 let buttonRadio = listeBtnRadio[index]
//                     buttonRadio.addEventListener("change", (event)=>{
//                         if (event.target.value === "1") {
//                             listeProposition = listeMots
//                         } else {
//                             listeProposition = listePhrase
//                         }
//                         afficherProposition(listeProposition[i])
//                     })
//                 }


//                 let mailForm = document.querySelector(".mailForm")
                
//                 mailForm.addEventListener("submit", (event) => {
//                     event.preventDefault()
                    
//                     const nom = document.getElementById("nom").value  // autre possibilté : *** let baliseNom = document.getElementById("nom") / let nom = baliseNom.value ***
//                     const email = document.getElementById("email").value // autre possibilté : *** let baliseEmail= document.getElementById("email") / let email = baliseEmail.value ***
                    
//                     let scoreEmail = `${score} / ${i}`       

//                     afficherEmail(nom, email, scoreEmail)         
//                 })
                
//                 afficherResultat(score, i)
                
//             }


// // *** Etape 7 ***

// /*********************************************************************************
//  * 
//  * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
//  * 
//  *********************************************************************************/

// /**
//  * Cette fonction affiche dans la console le score de l'utilisateur
//  * @param {number} score : le score de l'utilisateur
//  * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
//  */

// function afficherResultat(score, nbInstance){
//     let spanScore = document.querySelector(".zoneScore span");
//     let result = `${score} / ${nbInstance}`
//     spanScore.innerText = result
// }

// /**
//  * Cette fonction affiche une proposition, que le joueur devra recopier, 
//  * dans la zone "zoneProposition"
//  * @param {string} proposition : la proposition à afficher
//  */

//     function afficherProposition(proposition){
//         let zoneProposition = document.querySelector(".zoneProposition");
//         zoneProposition.innerText = proposition
//     }

// /**
//  * Cette fonction construit et affiche l'email. 
//  * @param {string} nom : le nom du joueur
//  * @param {string} email : l'email de la personne avec qui il veut partager son score
//  * @param {string} score : le score. 
//  */
// function afficherEmail(nom, email, score) {
//     let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
//     location.href = mailto
// }

// // function validerNom(balise) {
// //     let nomRegex = new RegExp("[a-zA-Z\-\s\']{2}")
// //     console.log(nomRegex.test(balise.value))
// //     return nomRegex.test(balise.value)
// // };

// function validerNom(nom) {
//     if (nom.length >= 2){
//         console.log(true)
//         return true
//     }
//     console.log(false)
//     return false
// }

// function validerEmail(email) {
//     let emailRegex = new RegExp("[a-z0-9.-_]+@[a-z0-9.-_]+\\.[a-z]{2,3}")
//     console.log(emailRegex.test(email))
//     if (emailRegex.test(email)){
//         return true
//     }
//     return false
// };


//     /**
//  * Cette fonction lance le jeu. 
//  * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
//  */

//     function lancerJeu(){
        
//         initAddEventListenerPopup()
//         let score = 0
//         let i = 0
//         let listeProposition = listeMots


//         let btnValiderMot = document.getElementById("btnValiderMot");
//         let inputEcriture = document.getElementById("inputEcriture");

//         afficherProposition(listeProposition[i])

//         btnValiderMot.addEventListener("click", () =>{ 
//             if (inputEcriture.value === listeProposition[i]){
//                 score++
//             }
//             i++
//             afficherResultat(score, i)
//             inputEcriture.value = ''
//             if(listeProposition[i]=== undefined){
//                 afficherProposition("le jeu est fini")
//                 btnValiderMot.disabled = true
//             } else {
//                 afficherProposition(listeProposition[i])
//             }
            
//             })

//             let listeBtnRadio = document.querySelectorAll(".optionSource input")
//             for (let index =0; index < listeBtnRadio.length; index++ ) {
//                 let buttonRadio = listeBtnRadio[index]
//                     buttonRadio.addEventListener("change", (event)=>{
//                         if (event.target.value === "1") {
//                             listeProposition = listeMots
//                         } else {
//                             listeProposition = listePhrase
//                         }
//                         afficherProposition(listeProposition[i])
//                     })
//                 }


//                 let mailForm = document.querySelector(".mailForm")
                
//                 mailForm.addEventListener("submit", (event) => {
//                     event.preventDefault()
                    
//                     const nom = document.getElementById("nom").value  // autre possibilté : *** let baliseNom = document.getElementById("nom") / let nom = baliseNom.value ***
//                     const email = document.getElementById("email").value // autre possibilté : *** let baliseEmail= document.getElementById("email") / let email = baliseEmail.value ***
                    
//                     let scoreEmail = `${score} / ${i}`                
                    
//                     if (validerNom(nom) && validerEmail(email)) {
//                         afficherEmail(nom, email, scoreEmail)
//                     } else {
//                         console.log("error")
//                     }
                    
//                 })
                
//                 afficherResultat(score, i)
                
//             }


            
// *** Etape 8 ***

/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */

function afficherResultat(score, nbInstance){
    let spanScore = document.querySelector(".zoneScore span");
    let result = `${score} / ${nbInstance}`
    spanScore.innerText = result
}

/**
 * Cette fonction affiche une proposition, que le joueur devra recopier, 
 * dans la zone "zoneProposition"
 * @param {string} proposition : la proposition à afficher
 */

    function afficherProposition(proposition){
        let zoneProposition = document.querySelector(".zoneProposition");
        zoneProposition.innerText = proposition
    }

/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}


/**
 * cette fonction verrifie le contenu de la balise input et si il corresponds aux criteres de validations
 * @param {string} nom 
 * @returns 
 */

// function validerNom(balise) {
//     let nomRegex = new RegExp("[a-zA-Z\-\s\']{2}")
//     console.log(nomRegex.test(balise.value))
//     return nomRegex.test(balise.value)
// };

function validerNom(nom) {
    if (nom.length >= 2){
        console.log(true)
        return true
    }
    console.log(false)
    return false
}
/**
 * cette fonction verrifie le contenu de la balise input et si il corresponds aux criteres de validations
 * @param {string} email 
 * @returns 
 */
function validerEmail(email) {
    let emailRegex = new RegExp("[a-z0-9.-_]+@[a-z0-9.-_]+\\.[a-z]{2,3}")
    console.log(emailRegex.test(email))
    if (emailRegex.test(email)){
        return true
    }
    return false
};


    /**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */

    function lancerJeu(){
        
        initAddEventListenerPopup()
        let score = 0
        let i = 0
        let listeProposition = listeMots


        let btnValiderMot = document.getElementById("btnValiderMot");
        let inputEcriture = document.getElementById("inputEcriture");

        afficherProposition(listeProposition[i])

        btnValiderMot.addEventListener("click", () =>{ 
            if (inputEcriture.value === listeProposition[i]){
                score++
            }
            i++
            afficherResultat(score, i)
            inputEcriture.value = ''
            if(listeProposition[i]=== undefined){
                afficherProposition("le jeu est fini")
                btnValiderMot.disabled = true
            } else {
                afficherProposition(listeProposition[i])
            }
            
            })

            let listeBtnRadio = document.querySelectorAll(".optionSource input")
            for (let index =0; index < listeBtnRadio.length; index++ ) {
                let buttonRadio = listeBtnRadio[index]
                    buttonRadio.addEventListener("change", (event)=>{
                        if (event.target.value === "1") {
                            listeProposition = listeMots
                        } else {
                            listeProposition = listePhrase
                        }
                        afficherProposition(listeProposition[i])
                    })
                }


                let mailForm = document.querySelector(".mailForm")
                
                mailForm.addEventListener("submit", (event) => {
                    event.preventDefault()
                    
                    const nom = document.getElementById("nom").value  // autre possibilté : *** let baliseNom = document.getElementById("nom") / let nom = baliseNom.value ***
                    const email = document.getElementById("email").value // autre possibilté : *** let baliseEmail= document.getElementById("email") / let email = baliseEmail.value ***
                    
                    let scoreEmail = `${score} / ${i}`                
                    
                    if (validerNom(nom) && validerEmail(email)) {
                        afficherEmail(nom, email, scoreEmail)
                    } else {
                        console.log("error")
                    }
                    
                })
                
                afficherResultat(score, i)
                
            }
