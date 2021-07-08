// ==UserScript==
// @name         Rocwo's-UPPERCUT
// @namespace    https://github.com/ArdentLeKhey
// @version      0.1
// @description  Up le topax de manière automatisée
// @author       ArdentLeKhey
// @grant        none
// @include      *www.jeuxvideo.com/forums/*-risistar-la-v9-arrive-enfin.htm*
// @include      *www.jeuxvideo.com/forums/*-risistar-les-kheys-retournent-dans-l-espace-samedi.htm*
// @include      *www.jeuxvideo.com/forums/*-tu-viens-celestin-on-va-dans-l-espace-risistar.htm
// @include      about:addons
// @require      http://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

// Ajout de jQuerry
var $ = window.jQuery;
var jQuery = window.jQuery;

// Interval de temps pour poster un message (en secondes)
var min = 45//120;
var max = 75//420;

var messages = [
    "Petit up !",
    "L'épingle ou cancer",
    "Allé les modos on met l'épingle",
    "Plus que 2 minutes",
    "https://image.noelshack.com/fichiers/2016/38/1474490235-risitas434.png",
    "Epingle https://www.noelshack.com/2021-27-3-1625679874-image.png",
    "Epingle ou cancer",
    "Epingle ou méningite",
    "Epingle ou fasciite nécrosante",
    "Les modos qui aiment pas Risistar",
    "https://image.noelshack.com/fichiers/2021/27/3/1625693984-remini20210707233459985.jpg",
    "Bon elle vient cette épingle ?",
    "UPENT !",
    "UP !",
    "up",
    "UPPERCUT !",
    "1 épingle = 1 couille en moins pour Salgarie ce qui fait un total de 0 couille",
    "encore 2 minutes",
    "Vous allez jouer raideur ou mineur ?",
    "De qui serez-vous le frigo ?",
    "Etre ou ne pas être un frigo, tel est la question",
    "Likeagod met nous l'épingle",
    "Epingle ce topic bien en vue chef https://www.noelshack.com/2021-27-3-1625674390-image.png",
    "hophophop l'épingle va pas se mettre toute seule",
    "Modo épingle https://www.noelshack.com/2021-27-3-1625675016-image.png",
    "go envoyer des pakpaks chez likeagod jusqu'à ce qu'il épingle",
    "postes ou cancer",
    "UPENT POUR L'EPINGLE",
    "modo https://www.noelshack.com/2021-27-3-1625676598-image.png",
    "modo https://www.noelshack.com/2021-27-3-1625676598-image.png",
    "modo https://www.noelshack.com/2021-27-3-1625676598-image.png",
    "modo https://www.noelshack.com/2021-27-3-1625676598-image.png",
    "modo https://www.noelshack.com/2021-27-3-1625676598-image.png",
    "modo https://www.noelshack.com/2021-27-3-1625676598-image.png",
    "modo https://www.noelshack.com/2021-27-3-1625676598-image.png",
    "modo https://www.noelshack.com/2021-27-3-1625676598-image.png",
    "modo https://www.noelshack.com/2021-27-3-1625676598-image.png",
    "Epingle https://www.noelshack.com/2021-27-3-1625679874-image.png",
    "Epingle https://www.noelshack.com/2021-27-3-1625679874-image.png",
    "Epingle https://www.noelshack.com/2021-27-3-1625679874-image.png",
    "Epingle https://www.noelshack.com/2021-27-3-1625679874-image.png",
    "Epingle https://www.noelshack.com/2021-27-3-1625679874-image.png",
    "Epingle https://www.noelshack.com/2021-27-3-1625679874-image.png",
    "Epingle https://www.noelshack.com/2021-27-3-1625679874-image.png",
    "Epingle https://www.noelshack.com/2021-27-3-1625679874-image.png",
    "Epingle https://www.noelshack.com/2021-27-3-1625679874-image.png",
    "Les modos ont probablement pas vu les mps :(",
    "Les modos ont probablement pas vu les mps :(",
    "Les modos ont probablement pas vu les mps :(",
    "Les modos ont probablement pas vu les mps :(",
    "Les modos ont probablement pas vu les mps :(",
    "D’accord mais cela ne change rien au fait qu'il y a 48 millions de kangourous en Australie et 3 457 380 habitants en Uruguay. donc si les kangourous décident d'envahir l'Uruguay, chaque Uruguayen doit combattre 14 kangourous. Autant te dire que les Uruguayens sont finitos",
    "Lancement dans 2 minutes",
    "Lancement dans 2 minutes",
    "Lancement dans 2 minutes",
    "Lancement dans 2 minutes",
    "Lancement dans 2 minutes",
    "Lancement dans 2 minutes",
    "Raider la galaxy en musique, Sah quel plaisir ! https://www.youtube.com/watch?v=H2d_srsedDs",
    "Une photo des pieds de ghosty offerte pour toute inscription à la v9 :ok:",
    "Une photo des pieds de ghosty offerte pour toute inscription à la v9 :ok:",
    "Une photo des pieds de ghosty offerte pour toute inscription à la v9 :ok:",
    "Une photo des pieds de ghosty offerte pour toute inscription à la v9 :ok:",
    "Une photo des pieds de ghosty offerte pour toute inscription à la v9 :ok:",
    "Danse du ventre de kaza en privé sur discord pour tout push sur moi-même https://www.noelshack.com/2021-27-3-1625673617-image.png",
    "Danse du ventre de kaza en privé sur discord pour tout push sur moi-même https://www.noelshack.com/2021-27-3-1625673617-image.png",
    "Danse du ventre de kaza en privé sur discord pour tout push sur moi-même https://www.noelshack.com/2021-27-3-1625673617-image.png",
    "Danse du ventre de kaza en privé sur discord pour tout push sur moi-même https://www.noelshack.com/2021-27-3-1625673617-image.png",
    "Danse du ventre de kaza en privé sur discord pour tout push sur moi-même https://www.noelshack.com/2021-27-3-1625673617-image.png",
    "Danse du ventre de kaza en privé sur discord pour tout push sur moi-même https://www.noelshack.com/2021-27-3-1625673617-image.png",
    "MODO EPINGLE",
    "MODO EPINGLE",
    "MODO EPINGLE",
    "MODO EPINGLE",
    "MODO EPINGLE",
    "MODO EPINGLE",
    "MODO EPINGLE",
];

// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (exclue).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
function getRandomInt(_min, _max) {
  min = Math.ceil(_min);
  max = Math.floor(_max);
  return Math.floor(Math.random() * (_max - _min)) + _min;
}

$(document).ready(function() {
    setTimeout(function(){
        $("#message_topic:first").val(messages[Math.floor(Math.random() * messages.length)]);
        $("button:contains('Poster')" ).delay(500).click();
        setTimeout(function(){window.location.reload(true);}, 2000);
    }, getRandomInt(min, max + 1)*1000);
});
