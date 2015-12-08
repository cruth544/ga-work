![GA](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/ga.png?raw=true)

#RUBY - Collections & Loops


---

####Ruby - Collections & Loops

##Agenda

*	Iteration - Loops
*	Collections
	*	Arrays
	*	Hashes
*   Conditionals

---


##Iteration

===

<br>
###Repetition
####Repetition
#####Repetition


---

##Iteration (Ruby-esque Loops)

*	These loops are common in Ruby and good to know as a programmer.

	*	.times
	*	.upto()
	*	.downto()
	*   for

* For additional help with syntax, see the Resources at the end of the slides.

---

##Iteration (Ruby-esque Loops)
###Times Iterator

```ruby
3.times do
	puts "Going!"
end

puts "Gone!!!"

# Going!
# Going!
# Going!
# Gone!!!
```

---


##Iteration (Ruby-esque Loops)
###.upto

```ruby
4.upto(6) do |num|
	puts "#{num} Mississippi"
end

# 4 Mississippi
# 5 Mississippi
# 6 Mississippi
```

---

##Iteration (Ruby-esque Loops)
###.downto

```ruby
puts "I'm going to give you 3 seconds to surrender!"

3.downto(1) do |second|
	puts "You have #{second} seconds left"
end

# You have 3 seconds left
# You have 2 seconds left
# You have 1 seconds left
```
---

##Iteration (Ruby-esque Loops)
###for loop

```ruby
for i in 0..3
	puts "The value of local variable is #{i}"
end

# The value of local variable is 0
# The value of local variable is 1
# The value of local variable is 2
# The value of local variable is 3
```

---


##Conditional Loops

```ruby
count = 10
while count > 0
	puts "Looping"
	count -=1
end

count = 10
until count < 1
	puts "Looping"
	count -= 1
end

count = 10
loop do
	break if count < 1
	puts "Looping"
	count -= 1
end
```
---

![lab](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/Exercise_icon_md.png?raw=true)

##Loops: Quick Challenge

* OCD Parrot! Create a method that will...
	- take any string as a parameter
	- print out that string exactly three times.

* Create a conditional loop that will..
	- start with a count of 2
	- count up by even numbers until the count equals 20.

---


##Iteration Recap
###Recap

* 	Iteration in programming allows us to keep our code DRY
* 	Common Ruby-esque loops are
	*	.times
	*	.upto
	*	.downto
	* 	.each (we will see in a moment)

---


##Collections
###Working with Collections in Ruby

---


##Collections
###Arrays

![accordion folder](https://raw.githubusercontent.com/keyanbagheri/GA_WDI_Public_Assets/master/images/ruby/accordian.jpg)

---


##Arrays
###Find by Index

![Array Indexing](https://raw.githubusercontent.com/keyanbagheri/GA_WDI_Public_Assets/master/images/ruby/array_index_diagram.png)

###Find by Index

```ruby
my_array = ["NYC", "LA", "SYD", "LDN"]
my_array[0] #"NYC"
my_array[1] #"LA"
my_array[-1] #"LDN"
```

---

###Find by Position

![Array position](https://raw.githubusercontent.com/keyanbagheri/GA_WDI_Public_Assets/master/images/ruby/arrays_position_diagram.png)

###Find by Position

```ruby
my_array = ["NYC", "LA", "SYD", "LDN"]
my_array.first #"NYC"
my_array.last #"LDN"
```

---

###Array Methods

```ruby
# strings are objects in ruby, and have methods attached
name = "GaMaur"
name.upcase

# arrays are also objects, and come with their own methods
my_array = ["NYC", "LA", "SYD", "LDN"]
my_array.reverse
my_array.sort
my_array.shuffle
```

---

![lab](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/Exercise_icon_md.png?raw=true)

##Arrays: Quick Challenge

Create an array called `ice_cream_flavors`.

* Add 3 or 4 flavors to the array.
* Print the second flavor to the console.
* Print a randomized version of the array.
* Print an ordered version of the array.

---


##Arrays
###Recap


*	A collection of data
*	Can search an array by index or position
*	Arrays are objects and therefore have methods.

---


##Collections
###Hashes

![Labeled Accordion](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/ruby/labeled_accordian.jpeg?raw=true)

---

####What is a hash?

* A collection of objects with corresponding keywords (keys must be unique)
* Use when order doesn't matter.
* Use when you have more complex collection of data.

---

####Hashes
<br>
##Real World Examples?

###?
####?
#####?

---


###Creating a Hash

```ruby
# Blank hashes...
empty_hash = Hash.new
# => {}
another_empty_hash = {}
# => {}
hash_with_value = {:name => "Daniel"}
# => {:name => "Michelle"}
```
---

####What's going on here?

<br>

```ruby
hash_with_value = {:name => "Michelle"}
```
<br>

* hash_with_value ~ variable name 
* =	~ assignment operator
* :name	~ symbol (class) that serves as a key
* “Michelle”	~ string (class) that is the value
* => ~ hash rocket (assignment operator/)

---

```ruby
# Here's the syntax with key:value

person = {:name => "Tony Stark", :age => 35, :titles => ["Genius", "Billionaire", "Playboy", "Philanthropist"]}

person[:name]
# like an array, we use the brackets but instead of the index, we provide the key

person[:age]
# The two brackets are like a crosshairs used to line up precisely on a target. These brackets mean, "I am looking for `age` somewhere in this `person` object. Ready...aim...data."

person[:titles][0]
# => "Genius"

person[:random]
# => nil
```

---

```ruby
# you can change existing values
person[:age] = person[:age] + 1

# or create new values
person[:alias] = "Ironman"
person[:darkest_secret] = "Has daddy issues"

person
person.delete(:darkest_secret)
person
```

---

```ruby
person.keys
perssn.values

# check if a key exists in the hash

person.keys.include?(:name)
# => true
person.keys.include?(:darkest_secret)
#=> false

person.keys.include?(35)
# => false
person.values.include?(35)
#  => true
```
---

![lab](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/Exercise_icon_md.png?raw=true)

####Hashes: Quick Challenge

Create a hash called `class_data` with the following keys:

- :course_name, which should correspond to "WDI"
- :student_count, which should correspond to number of students in our class, 17
- :instructor, which should itself be a hash with the following keys
    - :name ("Keyan")
    - :gender ("M")
    - :can_program (true)
- get the student count from the hash
- get the instructor name from the hash

---

##Hashes
###Recap


*	A collection of data
*	Can search a hash by keyword
*	Hashes are objects and therefore have methods.

---

##Collections
###Array of Hashes

```ruby
users = [
  {:user => "Keyan", :role => "Instructor"},
  {:user => "Justin", :role=> "Expert-in-Residence"}
  {:user => "La", :role => "Student"]
]

# Alternate syntax for Ruby 1.9+

users = [
  {user: "Keyan", role: "Instructor"},
  {user: "Justin ", role: "Expert-in-Residence"},
  {user: "La", role: "Student"}
]
```


---


##Iterating Over Collections
###.each

```ruby
ga_markets = ["NYC", "LA", "SYD", "LDN"]

ga_markets.each do |n|
	puts market
end

ga_markets.each {|market| puts market}
```

---


![lab](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/Exercise_icon_md.png?raw=true)

##.each: Quick Challenge
* Print out each of your icecream flavors.
* Print out all of our users names and roles on one line each.

---


##Conditional Logic (revisited)
###If statements

It's either TRUE or FALSE (like booleans)

If you are greater than 18 
you are an adult

```ruby
if age > 18
	puts "You are an adult"
end
```

---

###Multiple Conditions (if/else statements)

```ruby

def guess_a_number(guess)
	secret_number = 5
	
	if guess > secret_number
		puts "Too High!"
	elsif guess < secret_number
		puts "Too Low!"
	else
		puts "You've guessed my hidden digit!"
	end
end

guess_a_number(3)
# will return "Too Low!"
guess_a_number(8)
# will return "Too High!
guess_a_number(5)
# will return "You've guessed my hidden digit!"

```

---

####Conditional Logic
#####Multiple Conditions

![truth_table](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/ruby/truth_table.png?raw=true)

---

![lab](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/Exercise_icon_md.png?raw=true)

#####Conditionals: Quick Challenge
####McDLP (McDonald's Lawsuit Protection App). 
* Create a conditional that checks if your coffee is too hot. If the temp of the coffee is above 100 degrees then you should print out a message saying that it's too hot to serve. Otherwise you should print a message saying that its safe to drink.

* Add another condition to make sure that the coffee is not served too cold. If the cup is less than 80 degrees then it should not be served. Help our McCafe baristas hit the sweet spot!

---

## Resources: Collections and Loops

###Cheat Sheet

---

###Arrays

```ruby
my_array = ["Apples", "Oranges", "Pears"]
```

> ["Apples", "Oranges", "Pears"]

```ruby
my_array = Array.new
```

> []

```ruby
Array.new(3)
```

> [nil, nil, nil]

```ruby
Array.new(3, "WDI")
```

> ["WDI", "WDI", "WDI"]

---

__Accessing Elements__

```ruby
arr = ["NYC", "LDN", "LA", "SF", "BOS"]
arr[0]
arr[100]
arr[-2]
```

> NYC

> nil

> SF

```ruby
arr[2, 3]
#returns three items starting at index 2
```

> ["LA", "SF", "BOS"]

---

```ruby
arr[1..4]
#returns range of idices from 1 up to and including 4
```

> [LDN, LA, SF, BOS]

```ruby
arr[1...4]
#returns range of indices from 1 up to but NOT including 4
```

> [LDN, LA, SF]

---

###Hashes

```ruby
GA_Markets = { "New York City"=>"NYC", "London"=>"LDN", "Los Angeles"=>"LA", "San Francisco"=>"SF", "Boston"=>"BOS"}

GA_Markets["London"]
```

> "LDN"

```ruby
super_heros = { batman: "Bruce Wayne", superman: "Clark Kent", 	spiderman: "Peter Parker"}

super_heros[:superman]
```

> "Clark Kent"

---

###Loops

__Iterator loop__

```ruby
4.times do
  puts "This will be printed 4 times"
end
```

> This will be printed 4 times

> This will be printed 4 times

> This will be printed 4 times

> This will be printed 4 times

---

__Each Loop__

```ruby
# A list of GA Courses
courses = [ "WDI", "UXDI", "BEWD", "FEWD" ]

names.each do|n|
	puts "GA has a course on #{n}"
end
```

> GA has a course on WDI

> GA has a course on UXDI

> GA has a course on BEWD

> GA has a course on FEWD

---

###Still Feel Lost?
####Catch Up With These Resources


-	Arrays [Ruby Docs](http://ruby-doc.org/core-2.0/Array.html)
-	Hashes [Ruby Docs](http://ruby-doc.org/core-2.0/Hash.html)
-	Hashes and Arrays [Tutorial](http://www.codecademy.com/courses/ruby-beginner-en-F3loB?curriculum_id=5059f8619189a5000201fbcb)
-	What is iteration? - [article](http://www.computerhope.com/jargon/i/iteration.htm)
-	[*“Ruby-esque”* Loops](http://ruby.about.com/od/rubyfeatures/a/loops_2.htm) see page 1 for more ruby loops not covered in class.

<br>

![GA](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/ga.png?raw=true)