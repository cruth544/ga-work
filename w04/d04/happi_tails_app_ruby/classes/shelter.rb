class Shelter
  attr_accessor :name
  attr_accessor :clients
  attr_accessor :animals
  attr_accessor :address


  def initialize name, address
    self.name     = name
    self.address  = address
    self.animals  = {}
    self.clients  = {}
  end

  def to_s
    return "#{self.name} shelter at #{self.address} has #{animal_count} animals and #{client_count} people"
  end


  def accept_animal name, animal
    self.animals[name] = animal
  end

  def animal_count
    return self.animals.length
  end

  def display_animals
    self.animals.each do |key, value|
      puts key
    end
  end

  def give_away_animal name
    temp_animal = self.animals[name]
    self.animals.delete(name)
    return temp_animal
  end


  def accept_client name, client
    self.clients[name] = client
  end

  def client_count
    return self.clients.length
  end

  def display_clients
    self.clients.each do |key, value|
      puts key
    end
  end



end

# class Object
#   attr_accessor.object_id

#   def new *args
#     self.alloc
#     make the object
#     self.initialize *args
#   end
# end
