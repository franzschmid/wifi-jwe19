
alert("mein erster Alert");

var consolenTest = "Hallo Mustermann";

console.log(consolenTest);

consolenTest = "servus Mustermann";

console.log(consolenTest);

if(consolenTest === "servus Mustermann") {
  alert("servus");
}

//check for external Links and giving them an attribute so that they open in another Tab in the Browser

var externalLink = $('a[href^="https://"], a[href="http://"]');

if(externalLink.length > 0) {
  externalLink.attr('target', '_blank');
}
