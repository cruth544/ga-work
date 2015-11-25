function writeDing() {
  console.log('Ding!');
}

// var dingHandle = setTimeout(writeDing, 3000);

var words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];

var sortedWords = words.sort(function (a, b) {
  return b.length - a.length;
})
console.log(sortedWords);


function getBread(sandwich, cb) {
  setTimeout(function() {
    sandwich = ['bread'];
    cb(sandwich);
  }, 1000);
}

function addMayo(sandwich, cb) {
  setTimeout(function() {
    sandwich.push('mayo');
    cb(sandwich);
  }, 900);
}

function addTurkey(sandwich, cb) {
  setTimeout(function() {
    sandwich.push('turkey');
    cb(sandwich);
  }, 800);
}

function addCheese(sandwich, cb) {
  setTimeout(function() {
    sandwich.push('cheese');
    cb(sandwich);
  }, 700);
}

// Variable to hold the ingredients
var sandwich;

// Call the above functions below so that logging sandwich
// produces these ingredients in the correct order
// ["bread", "mayo", "turkey", "cheese"]


// getBread(sandwich, function (ingredient) {
//   addMayo(ingredient, function (ingredient) {
//     addTurkey(ingredient, function (ingredient) {
//       addCheese(ingredient, function (ingredient) {
//         console.log(ingredient);
//       })
//     })
//   })
// });

// getBread(sandwich,
//   addMayo(sandwich,
//     console.log(sandwich)));


getBread(sandwich, function (indgredient1) {
  addMayo(indgredient1, console.log(sandwich));
});

sandwich.forEach(function (element, i) {

})

for (var i = 0; i < sandwich.length; i++) {
  sandwich[i].thisFunction();
};


















