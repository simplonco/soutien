var byId    = document.getElementById('by-id');
var byClass = document.getElementsByClassName('by-class');
var byTag   = document.getElementsByTagName('div');

console.log("/------------------- LOG BY ID --------------------/");
console.log(byId);

console.log("/------------------- DIR BY ID -------------------/");
console.dir(byId);

console.log("/------------------- LOG BY CLASS -------------------/");
console.log(byClass);

console.log("/-------------------- LOG BY TAG ------------------/");
console.log(byTag);

console.log("/-------------------- LOG THE WHOLE DOCUMENT ------------------/");
console.log(document);
console.dir(document);

byId.onclick = function (e) {
  byId.innerHTML = "Bonjour tu as clique sur x: " +  e.clientX + " et y: " + e.clientY;
};