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
 
console.log("\nExercice 10 : Écrivez un programme JavaScript pour renvoyer le reste de deux nombres.\n\n");


//console.log(  41 %  7 ); //  6
//resteDiv(1, 3) ➞ 1

function resteDiv(nb1,nb2){
    
   console.log( "Nombre1 = "+nb1+"; Nombre2 = "+nb2+"; Modulo = "+ nb1 %  nb2 ) 

}

resteDiv(1, 3);
resteDiv(41, 7);

 console.log("\nExercice 11 : Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100.\n Sinon, retournez FALSE.\n\n");


function checkInferieur (nb1,nb2){
    
    var somme = nb1 + nb2 ;
    
    console.log("Nombre1 = "+nb1+"; Nombre2 = "+nb2+"; Résultat = "+Boolean(somme < 100)) ; 
    
}     
            
       checkInferieur(75,30);  

       checkInferieur(25,10); 

 console.log("\nExercice 12 : Écrivez une fonction qui convertit les heures en secondes. \n\n");


function heureSeconde (heure){
    
    var NbreSecondes = (heure * 60 ) * 60 ;
    
    console.log("Nombre d'heure = "+heure+"; Nombre de secondes = " + NbreSecondes) ; 
    
}     
            
       heureSeconde(1);  

       heureSeconde(5); 


 console.log("\nExercice 13 : Créez une fonction qui prend un nombre \net renvoie TRUE s’il est inférieur ou égal à zéro, sinon retournez FALSE.\n\n");


function checkNombre (nb){

    
    console.log("Nombre = "+nb+"; Résultat = "+Boolean(nb <=0)) ; 
    
}     
            
       checkNombre(3);  

       checkNombre(0); 

       checkNombre(-1); 


 console.log("\nExercice 14 : Créez une fonction qui renvoie TRUE lorsque nbr1 est égal à nbr2; sinon retournez FALSE.\n\n");


function isEqual (nb1,nb2){

    
    console.log("Nombre1 = "+nb1+"; Nombre2 = "+nb2+"; Résultat = "+Boolean(nb1 === nb2)) ; 
    
}     
    

isEqual (3,3);
    isEqual (3,'3');
        isEqual (12,16);
            


 console.log("\nExercice 15 : Créez une fonction qui renvoie TRUE si un entier est divisible par 5, sinon retournez FALSE.\n\n");


function isDivisible (nb){

    
    console.log("Nombre = "+nb+"; Résultat = "+Boolean(nb % 5)) ; 
    
}     
            
       isDivisible(5); 
       isDivisible(10); 
       isDivisible(6); 

 console.log("\nExercice 16 : Écrivez une fonction qui prend deux entiers (heures, minutes)\n et les convertit en secondes. \n\n");


function hmToS (heures,minutes){
    
    var NbreSecondes = (heures * 3600 ) + (minutes * 60) ;
    
    console.log("heures : "+heures+"; minutes : " + minutes + " Nombre de secondes = " + NbreSecondes) ; 
    
}     
            
       hmToS(1,10) ;  

       hmToS(0,59) ; 

       hmToS(2,30) ; 

 console.log("\nExercice 17 : Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée. \n\n");

const tableau = ["La", "clef", "est", "sous", "le","paillasson"];

var i=0;

function inverseTableau( ) {

  var tableauInverse = [];
  
  for (var i = tableau.length - 1; i >= 0; i--) {
    tableauInverse.push(tableau[i]);
  }
  return tableauInverse;
}

console.log("Le tableau de départ : " + tableau);
console.log("Le tableau inversé : " + inverseTableau()) ;







console.log("\nExercice 18 : Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau. \n\n");

function getLastElem(tableau) {
    
    var dernierElem = tableau[tableau.length-1];
    
  console.log("Le tableau : " + tableau) ; 
  console.log("Le dernier élément du tableau : " + dernierElem) ;  
    
}


getLastElem(['Alex', 'Bob', 'Emily']) ;
getLastElem([26, 40, 16, 24, 56, 72]) ;


 console.log("\nExercice 19 : Créez une fonction qui vérifier l’égalité de deux paramètres a et b.\n La valeur et le type de paramètres doivent être testés afin d’avoir une égalité. \nLa fonction doit renvoyer TRUE si les paramètres sont égaux et FALSE s’ils sont différents.\n\n");


function estEgal (elem1,elem2){

    
    console.log("Elem1 = "+elem1+"; Elem2 = "+elem2+"; Résultat = "+Boolean(elem1 === elem2)) ; 
    
}     
    
estEgal (3,3);
    estEgal (3,'3');
        estEgal (12,'Julien');



 console.log("\nExercice 20 : Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.\n\n");

function isEmpty(elem){
  
  
  let voteable = (elem === "") ? "ok vide":"pas vide";
  
  
  console.log("Chaîne = " + elem + " Résultat : " + voteable) ;
 
    
}

isEmpty("shajkS") ;  
isEmpty("WayToLearnX") ; 
isEmpty(" ") ;
isEmpty("") ;


/*--------  cadeau Bonux  ---------*/

 console.log("\nExercice 21 : Cadeau Bonux : chiffrez un texte avec Javascript :\n\n");

var encodage="" ;

function crypto (message){

 for (i = 0; i < message.length; i++) { //boucle nbre de lettre du message
 
 var lettre = message[i] ; // caractere numero 1, caractere 2, caractere 3, etc.
 
 var codeascii= (lettre.charCodeAt()); // Code ASCII :  A=65 ; B=66 ; C=67; etc.
 
 var cryptage = (lettre.charCodeAt()+4); // on ajoute 4 au code ASCII du caractere
 
 var code = String.fromCharCode(cryptage); // on obtient le code ASCII du nombre (65 -> A, etc.)
     
   encodage = encodage + code ;
}
    
    console.log("Message original : " + message+"\n\n");
    
    console.log("Message chiffré : " + encodage); // On affiche le résultat du chiffrement
}

crypto ("Le paquet sera déposé à la gare demain 15h, sous le siège C23");



