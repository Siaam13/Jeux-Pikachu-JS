var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");

// Fonction pour que le perso saute
function sauter() {
   if(perso.classList !="animation"){
    perso.classList.add('animation')
   }
   setTimeout(function(){
    perso.classList.remove('animation');
   },500)
   // Incrémente le compteur de sauts
   count++;
   // Met à jour les éléments HTML affichant le compteur de sauts
   counter.innerHTML = count;
   if (count > record){
     record = count;
     recordCounter.innerHTML = record;
     localStorage.setItem("record", record);
   }
}

// Verifier si l'obstacle touche le perso
var verification = setInterval(function(){
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));
    if(obstaclesLeft<20 && obstaclesLeft> 0 && persoTop>= 130) {
      obstacles.style.animation = "none";
      alert("PERDU")
    }
},1)

let count = 0;
let record = localStorage.getItem("record") || 0;
const counter = document.getElementById("compteur");
const recordCounter = document.getElementById("record");
recordCounter.innerHTML = record;

//Remise du score a zero quand on click sur le bouton start

let started = false;
startBtn.addEventListener("click", function() {
  started = true;
  sauterBtn.disabled = false;
  count = 0;
  counter.innerHTML = count;
});

sauterBtn.addEventListener("click", function() {
  if (started) {
    sauter();
  }
});