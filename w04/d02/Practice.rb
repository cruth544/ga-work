#<<<< DIRECTIONS >>>
# For each exercise you will be asked to enter either text, a code example, or both. Blocks of =begin =end will signify text entry,
# otherwise a code example should be given.

### Create an Empty class named 'Person' that will reside in a local variable named 'person'. This means you will need to create a class
# so that you can then initialize it

class Person
  attr_accessor :name
  attr_accessor :age
  attr_accessor :birthdate

end

person = Person.new


#Example>
​
### Define three properties on a 'People' class: 'name','age','birthdate'
​
#Example>
​
class People2
  @name
  @age
  @birthdate

  def name
    @name
  end
  def name= name
    @name = name
  end
  def age
    @age
  end
  def age= age
    @age = age
  end
  def birthdate
    @birthdate
  end
  def birthdate= date
    @birthdate = date
  end

end

​
### Define a new class 'People2' with 'methods' that allow you to access and set all three of the sane properties from People class,
# Do not use attribute accessor

#Example>

### Explain what calling Person.new does
=begin

it creates a new instance of the Person class
​
=end



### Create an initializer method that allows you do Person3.new 'Amy Smith' , which initializes the  Person's name property
​
#Example>
class Person3
  def initializer name
    @name = name
  end
end

### Write a method that outputs the value of the self keyword to the console for a class name 'SelfSayer'


#Example>
class SelfSayer
  def print_self
    puts self
  end
end


### What is the different functionality provided by the three different 'attr' accessor methods? Create a class 'Car' with three attributes:
#max_speed, weight, and car type car_type. Define the accessibility of each of these attributes differently using the three different accessor
#declarations. Write comments above each declaration indicating exactly what it does.


#Example>
class Car
  #can only read attribute
  attr_reader car_type
  #can only write to attribute
  attr_writer weight
  #read and write to attribute
  attr_accessor max_speed
end



### Explain in as much detail as possible what self refers to and what it means in the grand scheme of things
=begin
it refers to the current class

=end


#Example>



### Explain what object instantiation means:
=begin





=end



### What is the difference in scope between an instance variable vs a local variable?
# Can you show the usage of each one?



=begin

a local variable is only available in the scope of the current method
an instance variable is available to the entire class


=end


#Example>
class Instance_variable
  @instance_variable
end

def local_variable
  local_variable = "I am local"
end



#### Explain in detail what a method is



=begin

a method is an action that can be called on an object


=end



#### What is the difference between a Class method and an instance method?



=begin

A class method is available to be called from other objects (public)
An instance method can only be called within the class (private)


=end

#Example>


#### Is it possible to add methods to an object after it is created? In other words...is the following code correct?? Explain your answer

#Example>
send :define_method, method_name do
  puts arg
end


#### What does the ? mark at the end of a method signify?

=begin
It signifies that it will return a true or false value


=end

### Can you create a method on a Student class that will check whether or not the student is enrolled in a class.
# Create an instance variable 'class' and that can be set to a string, and a method that will return true when a
# new Student is initialized with 'history' as a class.

#Example>
class Student
  @course
  def initialize course="history"
    @course = course
  end

  def is_enrolled_in? course
    if self.course
      return true
    else
      return false
    end
  end
end



### What does the ! sign at the end of a method signify?


=begin
It will actively change the object that it is called on rather than returning a copy

=end

#Example>

### What does the * symbol signify when passed as a method parameter?
#Where else is it used in the language and for what purpose?

=begin
It signifies that we don't know how many arguments will be passed in, so it will be represented as an array

=end

#Example>

### Can you define a method on an instance of a class after it has been initialized?

#Example>
send :define_method, method_name do
  puts arg
end

### What does inheritance mean?

=begin
Inheritance means that one class will contain all the properties and methods of another class
=end

### Can you provide an example of a class that inherits a method from another class?

#Example>
class Cat < Mammal

end


### Does ruby support what is known as multiple inheritance? If not, are there any alternatives?

=begin
No ruby does not support multiple inheritance
=end

### What are the different ways that we can check what the type of an object is, or what class it was made from? Can you provide
#an example of each?

#Example>
object.is_a? Object
object.method_defined? :initialize

