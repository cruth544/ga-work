# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


for department in Department.list
  Department.create(name: department)
end

100.times do
  Employee.create(name: Faker::Name.name, age: Faker::Number.between(18, 65), address: Faker::Address.city, salary: Faker::Number.between(8, 20) * 5000, department_id: Faker::Number.between(1, Department.list.length))
end
