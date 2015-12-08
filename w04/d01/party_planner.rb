guest_list = [
  {name: "Keyan",
    age: 30},
  {name: "Kedar",
    age: 28},
  {name: "Young Guy",
    age: 18}
]

def over_21? age
  return age >= 21
end

def list_over_21 guest_list
  guest_list.select do |person|
    over_21?(person[:age])
  end
end
puts("List over 21: #{list_over_21(guest_list)}")

def people_over_21 guest_list
  over_21 = list_over_21(guest_list)
  return_array = []
  for person in over_21
    return_array.push(person[:name])
  end
  return return_array
end
puts("#{people_over_21(guest_list)} are over 21")

def number_of_people_over_21 guest_list
  return people_over_21(guest_list).length
end
puts("#{number_of_people_over_21(guest_list)} people are over 21")

def number_of_drinks guest_list
  guest_list = people_over_21(guest_list)
  return guest_list.length * 4
end
puts("We will need #{number_of_drinks(guest_list)} drinks")

def add_new_guest_to guest_list
  puts "What is your name?"
  name = gets.chomp
  puts "How old are you?"
  age = gets.chomp

  return {name: name,
          age: age}
end
puts("List prior to add: ")
puts(guest_list)
guest_list.push(add_new_guest_to(guest_list))
puts("List after add:")
puts(guest_list)
