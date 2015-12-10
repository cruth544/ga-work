class Person
  attr_accessor :name
  attr_accessor :age

  def initialize name="John Doe", age=18
    self.name = name
    self.age = age
  end

  def talk
    puts "Hello, my name is #{self.name} and I am #{self.age}"
  end
end

class Actor < Person
  attr_accessor :role

  def initialize name, age, role
    self.name = name
    self.age  = age
    self.role = role
  end

  def perform
    puts "I am performing"
  end

  def go_full method
    puts "I went full #{method}"
  end

end

class Director < Person
  attr_accessor :pretentious
  attr_accessor :current_film

  def initialize name, age, pretentious
    self.name = name
    self.age  = age
    self.pretentious = pretentious
  end

  def direct
    if self.current_film
      puts "Filming Movie"
    end
  end

end

class Producer < Person
  attr_accessor :assistant

  def initialize name, age, assistant=null
    self.name = name
    self.age  = age
    self.assistant = assistant
  end

  def raise_money
    puts "$$$MONEY$$$"
  end

  def tell_assistant_to_hold_calls
    puts "HEY #{self.assistant.name}!! HOLD THAT CALL!"
  end

end

class Movie
  attr_accessor :name
  attr_accessor :producer
  attr_accessor :director
  attr_accessor :cast
  attr_accessor :audience

  def initialize name, *people
    self.name = name
    self.cast = []
    self.audience = []
    for person in people
      if person.kind_of?(Producer)
        self.producer = person
      elsif person.kind_of?(Director)
        self.director = person
        self.director.current_film = self.name
      elsif person.kind_of?(Actor)
        self.cast.push(person)
      else
        self.audience.push(person)
      end
    end
  end

  def make_movie
    if self.producer and self.director and self.cast
      puts "Filming has begun"
    else
      puts "No one is working!"
    end
  end

  def screen_movie
    if self.audience.length > 0
      puts "Screening Movie..."
    else
      puts "No one is watching..."
    end
  end

end

#audience
chad  = Person.new "Chad", 25
la    = Person.new "La", 29

#actors
leo   = Actor.new "Leonardo DiCaprio", 41, "lead male"
kate  = Actor.new "Kate Winslet", 40, "lead female"

#director
james = Director.new "James Cameron", 61, false

#producer
jon  = Producer.new "Jon Landau", 55, Person.new("Judy", 22)

#movie
make_titanic = Movie.new "Titanic", james, jon, leo, kate
watch_titanic = Movie.new chad, la














































