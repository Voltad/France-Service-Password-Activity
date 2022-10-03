var input = document.getElementById("txt");



var modal = document.getElementById("myModal");

var btn = document.getElementById("btn");

var googlebtn = document.getElementById("googlebtn")

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
    var Password = document.getElementById("in").value; // Contenus de l'HTML

    // Mot de passse 1234
    if (Password == "1234") {

        let mt = document.getElementById("title").innerHTML = "Attention !" // le titre

        let p = document.getElementById("text").innerHTML = "Ce mot de passe n'est pas assez compliqué pour sécuriser ton compte bancaire ! utilise plutot des chiffres ou lettres complex : GazkeAz" // la description

        modal.style.background = "#c63744";
    } else {

    }

    // mot de passe johndu!
    if (Password == "johndu!") {

        let mt = document.getElementById("title").innerHTML = "Toujours pas !" // le titre

        let p = document.getElementById("text").innerHTML = "Attention un mot de passe possédant tes informations (johndu!) peut être facilement crackable !" // La description

        modal.style.background = "#df9339";
    } else {

    }

    // mot de passe Aer14!!
    if (Password == "Aer14!!") {

        let mt = document.getElementById("title").innerHTML = "Et ben voila !" // le titre

        let p = document.getElementById("text").innerHTML = "Félicitation ! un mot de passe de ce type peut prendre plusieurs milliers d'année a ce faire piraté ! Pour t'aider tu peux utiliser des sites qui généres des caractéres aléatoires !" // la description

        modal.style.background = "#24d822";
    } else {

    }
    if (Password == "") {
        modal.style.display = "none";
    }
}

// googlebtn.onclick = function () {
//     modal.style.display = "block";
//     let mt = document.getElementById("title").innerHTML = "Attention !"

//     let p = document.getElementById("text").innerHTML = "N'utilise jamais les services googles !"

//     modal.style.background = "#c63744";
// }

span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}