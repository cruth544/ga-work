# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

100.times do
  Author.create(
    name: Faker::Name.name,
    address: "#{Faker::Address.street_address}, #{Faker::Address.city}, #{Faker::Address.state}"
    )
end
1000.times do
  Book.create(
    name: Faker::Book.title,
    isbn: Faker::Number.number(8),
    price: Faker::Number.between(1, 20) * 5 - 1 + Faker::Number.between(95, 99) / 100.00,
    description: Faker::Hipster.sentence,
    publisher: Faker::Company.name,
    author_id: Faker::Number.between(1, Author.all.length)
    )
end
for category in Category.list
  Category.create(name: category)
end

Book.all.each do |book|
  book.categories << Category.all.sample
end
