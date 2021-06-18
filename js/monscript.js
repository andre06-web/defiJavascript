// Exercice 1 : Inverser les valeurs de deux variables

function exo1(a,b) {
     [a, b] = [b, a]; 
     return [a,b];
 }               
    var a = 25 ;
    var b = 52 ;

console.log("Exercice 1 : Inverser les valeurs de deux variables\n\n")
 console.log('a : ' + a + ' b : ' + b);
 var exo1Test = exo1(a,b); 
console.log('a : ' + exo1Test[0] + ' b : ' + exo1Test[1]+"\n\n");   
  
console.log("Exercice 2 : Afficher des variables\n\n")

var Nom = "toto" ;
var Age = 30;
var Homme = true;
 
console.log("Nom : "+Nom+" Age : "+Age+" Homme : "+Homme+"\n\n");

console.log("Exercice 3.1 : Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.\n\n");

var a= 7 ; var b = 8 ;
console.log("a = "+a+ " ; b = "+b+" ; Soit a + b = "+(a+b)+"\n\n");
var a= -3 ; var b = -58 ;
console.log("a = "+a+ " ; b = "+b+" ; Soit a + b = "+(a+b)+"\n\n");

console.log("Exercice 3.2 : Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.\n\n");

function minutesToSeconds(minutes){
    
    secondes = minutes * 60;
   
    console.log(minutes + " minutes = " + secondes + " secondes" + "\n\n");
    
    //return valeur*60;    
}      

//var minutes = 7;

//console.log(minutes + " minutes = " + minutesToSeconds(minutes) + "secondes" + "\n\n");

minutesToSeconds(3) ;

minutesToSeconds(15) ;

console.log("Exercice 4 : Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le résultat.\n\n");
            
function incremente(nbre){
    
   // nbre++ ;
    
    var incre = nbre + 1 ;
    
    console.log(nbre + " + 1 = " + incre);
}


incremente(7); incremente(13); incremente(67); 

console.log("\nExercice 5 : Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface.\n\n");

function surface(base,hauteur) {
    
    var surface = (base * hauteur)/2 ;
    
    console.log("base : " + base + "; hauteur : " + hauteur + "; Surface = " + surface + "\n\n") ; 
    
}

surface(20,10) ; surface(4,16) ; surface(32,8) ;

console.log("\nExercice 6 : Écrivez un programme JavaScript pour inverser une chaîne de caractères.\n\n");

function reverseStr(str) {
      
    var splitString = str.split("");  
 
    var reverseArray = splitString.reverse(); 
 
    var joinArray = reverseArray.join(""); 
  
    return joinArray;  
   
}

console.log(' "Salut les amis" devient : ' + reverseStr("Salut les amis"));

console.log(' "Il existe 10 type de persoonnes : ceux qui comprennent le langage binaire, et les autres" devient : ' + reverseStr("Il existe 10 types de personnes : ceux qui comprennent le langage binaire et les autres"));


console.log("\nExercice 7 : Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.\n\n");

function getMax(nb1,nb2,nb3) {
    
    var b = Math.max(nb1,nb2,nb3);
    
    console.log("3 nombres : " + nb1 + ", " + nb2 + ", " + nb3 + "; Le plus grand est : " + b);
       
}

getMax(23,56,11);
getMax(125,852,11);

console.log("\nExercice 8 : Créez une fonction qui prend un tableau et renvoie le premier élément.\n\n");

getFirst([15, 21, 30]) ;
getFirst([50, 60, 70]) ;


function getFirst(tableau){
    
    console.log("le tableau contient : " + tableau[0] +", " + tableau[1] +", " + tableau[2] +"; Le premier élément est : " + tableau[0] );
}

console.log("\nExercice 9 : Écrivez un programme JavaScript pour récupérer l’URL d’un site Web.\n\n");

console.log("L'URL (Uniform Resource Locator) de cette page est : \n");

console.log(window.location.href); 
 










