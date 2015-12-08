guest_list = [
    {name: "Tom", age: 18},
    {name: "Dick", age: 26},
    {name: "Harry", age: 27},
    {name: "Bob", age: 6},
    {name: "John", age: 21}
]

def legal person
    person[:age] >= 21
end

def person_sort persons
    underage = 0
    of_age = 0
    persons.each do |person|
        if legal person
            of_age += 1
        else
            underage += 1
        end
    end
    return underage, of_age
end

underage, of_age = person_sort(guest_list)
puts ("Underage:#{underage}, Of age:#{of_age}")

# Bonus #1
def split_guest_list persons
    underage = []
    of_age = []
    persons.each do |person|
        if legal person
            of_age << person[:name]
        else
            underage << person[:name]
        end
    end
    return underage, of_age
end

cannot_drink, can_drink = split_guest_list(guest_list)
puts "Can drink: #{can_drink}, Can't drink: #{cannot_drink}"

# Bonus #2
drinks_required = person_sort(guest_list)[1] * 4
puts "Drinks required #{drinks_required}"

# Bonus #3
def add_guest
    puts "What is your name?"
    name = gets[0..-2]
    puts "And your age?"
    age = gets[0..-2].to_i
    {name: name, age: age}
end

guest_list << add_guest
puts guest_list
