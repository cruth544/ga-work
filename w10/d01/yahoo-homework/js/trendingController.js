angular.module('Yahoo')
  .controller('trendingController', trendingController)

function trendingController () {
  this.leftTrends = [
    {number: '1. ',
      text: 'La Baik',
      link: null},
    {number: '2. ',
      text: 'Eve Plumb',
      link: null},
    {number: '3. ',
      text: 'Leslie Mann',
      link: null},
    {number: '4. ',
      text: 'Rachel McAdams',
      link: null},
    {number: '5. ',
      text: 'Jeep Wrangler',
      link: null}
  ]
  this.rightTrends = [
    {number: '6. ',
      text: 'River Cruises',
      link: null},
    {number: '7. ',
      text: 'Angelique Kerber',
      link: null},
    {number: '8. ',
      text: 'Alexis Bledel',
      link: null},
    {number: '9. ',
      text: 'Solar Panels',
      link: null},
    {number: '10. ',
      text: 'Briana Jungwirth',
      link: null}
  ]

  return this
}
