app.factory('Kitties', function () {
  return {
    deleteKitty: function (kitty) {
      var index = this.kitties.indexOf(kitty)
      this.kitties.splice(index, 1)
    },
    kitties: [
      {name: "Carl",
        age: 5,
        gender: 'boy',
        image: './images/carl.png',
        adopted: true
      },
      {name: "Jack",
        age: 4,
        gender: 'boy',
        image: './images/jack.png',
        adopted: false
      },
      {name: "Oscar",
        age: 2,
        gender: 'boy',
        image: './images/oscar.png',
        adopted: false
      },
      {name: "Princessmew",
        age: 3,
        gender: 'girl',
        image: './images/princessmew.png',
        adopted: false
      }
    ]
  }
})
