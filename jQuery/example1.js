//Definition Variablen
var apples = 5;
var nuts = 17;
var lemons = 9;

//mit ES6 eigentlich nicht mehr var sondern entweder const oder let

console.log(apples, nuts, lemons);

console.log(apples + nuts);
console.log(apples * nuts);
console.log(apples / nuts);
console.log(apples % nuts);
console.log(apples - nuts);

console.log("Das Ergebnis ist ", apples - nuts);

//escaping von "" mit einem vorangestellten \
console.log('<input type="email" onclick="this.style.backgroundColor=\"black\" ">');

var inputTag = "it's an inputTag";
console.log(inputTag);

var woche = ['Montag','Dienstag','Mittwoch','Donnerstag','Freitag'];

var langeWoche = new Array('Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag');

var wochenEnde = new Array('Samstag', 'Sonntag');


//Erstellung eines leeren Arrays
//assoziatives Attay
var = monat[];
var monat['x'] = 'Januar';
var monat['y'] = 'Mai';



var auto = [
  ['Rücklicht', 'Scheinwerfer'],
  ['Seitenspiegel', 'Rückspiegel'],
  ['Fahrer', 'Tür', 'Kofferraum'],
};


console.log(woche[3]);
console.log('Die Woche hat ' + woche.length + ' Tage.');

if(typeof woche[5] == 'undefined') {
  console.log('Tag ist entfallen.');
} else {
  console.log('Heute ist ' + woche[10]);
}

//an object
var person = {
  alter: 98,
  height: 140,
  greeting: 'Herr',
  name: 'Fry',
  surname: 'Bender',
};

console.log('Sehr geehrter ' + person.greeting + ' ' + person.surname);


var tier = function(vieh) {
  return 'Käfer' + vieh;
};

//retrun der Funktion ausgeben
console.log(tier(' komischer'));

// über eine function ein Object auslesen
var wieIstDeinName = function(person) {
  return person.name;
};

console.log(wieIstDeinName(person));


//Operatoren
var himmel = 'blau';

if(himmel == 'blau') {
  console.log('wirklich?');
} else {
  console.log('Nacht?');
}

// parseInt()

//NaN, not a number


// Verglecihoperatoren

if (tomate > melone) {
  console.log('no way');
} else {
  console.log{'yes it is'};
}


// oder ||
// und &&


// switch und case dann break

switch (melone) {
  case "23.5":
    console.log(true);
    break;
  case: "2":
      console.log(false);
  default:
    console.log('huraay');SS
}



//loop

for(var i = 0; i < 10; i++) {
  console.log(i);
}

//nur jedes 2. i wird ausgeführt
for(var i = 0; i < 10; i+=2) {
  console.log(i);
}

// while loop
var tag = 'Montag';
while(tag == 'Montag') {
  console.log('cool');
  tag = 'Samstag'
}

var jetzt = new.Date();
jetzt = jetzt.getTime();
while(jetzt < 1516886186) {
  console.log('herzlichen glückwunsch');
}
