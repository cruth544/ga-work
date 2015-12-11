class Animal
  attr_accessor :name
  attr_accessor :age
  attr_accessor :gender
  attr_accessor :species
  attr_accessor :toys

  def initialize name, age, gender, species
    self.name     = name
    self.age      = age
    self.gender   = gender
    self.species  = species
    self.toys     = []
  end

  def to_s
    toys_str = self.toys.join(", ")
    return "#{self.name} is a #{self.age} year old #{self.gender} #{self.species} that loves #{toys_str}"
  end

end
