// Exercice 1 : Inverser les valeurs de deux variables

function exo1(a,b) {
     [a, b] = [b, a]; 
     return [a,b];
 }           
            
    var a = 25 ;
    var b = 52 ;

console.log("Exercice 1 :\n\n")
 console.log('a : ' + a + ' b : ' + b);
 var exo1Test = exo1(a,b); 
console.log('a : ' + exo1Test[0] + ' b : ' + exo1Test[1]+"\n\n");   
  
console.log("Exercice 2 :\n\n")

var Nom = "toto" ;
var Age = 30;
var Homme = true;
 
console.log("Nom : "+Nom+" Age : "+Age+" Homme : "+Homme+"\n\n");
        