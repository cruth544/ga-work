# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

beans = Bean.create([
  {name: "Grant's Premium Dark Roast",
    roast: "strong",
    origin: "Mexico",
    quantity: 100},
  {name: "Jude's Medium Blend",
    roast: "medium",
    origin: "Colombia",
    quantity: 215.5}
  ])
