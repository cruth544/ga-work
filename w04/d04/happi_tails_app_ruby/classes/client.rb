require 'pry'
class Client
  attr_accessor :name
  attr_accessor :age
  attr_accessor :pets



  def initialize name, age
    self.name = name
    self.age  = age
    self.pets  = {}
  end

  def to_s
    return "#{self.name} is a #{self.age} year old with #{self.pets.length} pets"
  end


  def accept_pet name, pet
    self.pets[name] = pet
  end

  def give_away_pet name
    give_away = self.pets[name]
    self.pets.delete(name)
    return give_away
  end

  def display_pets
    for pet in self.pets
      puts pet
    end
  end

  def pet_count
    return self.pets.length
  end

end
