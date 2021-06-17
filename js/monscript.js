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










