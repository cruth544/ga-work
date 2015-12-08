
MY_NAME = "Chad"
my_age = 25

def greeting name, age
  puts "Hi there, my name is #{name} and I'm #{age}"
end

# greeting(MY_NAME, my_age)

my_friends = ['Keyan', 'Kedar', 'Grant']

def list_of_friends friends
  puts "Hi there, these are my friends: #{friends}"
end

# list_of_friends(my_friends)

=begin
<script>
  function animal (animal) {
    if (animal === "dog") {
      walkTheDog()
    } else if (animal === "cat") {
      playWithCat()
    } else {
      goToSleep()
    }
  }
  forcast.forEach(function (temp) {
      console.log(temp)
    }
  )
</script>
=end

def animal animal
  if animal == "dog"
    walk_the_dog
  elsif animal == "cat"
    play_with_Cat
  else
    go_to_sleep
  end
end


# 2.upto(5) do |num|
#   puts "#{num}"
# end

def ocd_parrot str
  for i in 0..2
    puts str
  end
end

# ocd_parrot "hello"

# for i in 1..10
#   puts (i * 2).to_s
# end

(0..my_friends.length).step(2) do |n|
  puts my_friends[n]
end

for i in my_friends do
















































