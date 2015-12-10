=begin
We would like to write a small program consisting of two classes: Trip and Mechanic

 * A Trip has bikes and those bikes need to be prepared by the Mechanic before they are ready for the trip.
 * The things a Mechanic must do are: clean_bicycle, pump_tires , lube_chain , check_brakes.
 * These methods will operate on a bicycle

 * Bicycles will be a property of Trip, where each bicycle is "red bike","blue bike", etc
 * The Mechanic object will print a string to the console "pumping tires of red bike"...etc to the console for each
   bike that Trip has.

 * Create the classes you need below, and then underneath the class definitions we can instantiate our objects and
   trigger the interactions between the two classes
=end

#TODO ENTER CODE
class Bike
  attr_accessor :bike

  def initialize color
    self.bike = "#{color} bike"
  end

end

class Trip
  attr_accessor :bicycles

  def initialize bicycles=[]
    self.bicycles = bicycles
  end

  def add_bike *bicycles
    for bike in bicycles
      self.bicycles.push(bike)
    end
  end

end

class Mechanic

  def full_service bike
    clean_bicycle(bike)
    pump_tires(bike)
    lube_chain(bike)
    check_brakes(bike)
  end

  def clean_bicycle bike
    puts "Cleaning #{bike}"
  end

  def pump_tires bike
    puts "Pumping tires of #{bike}"
  end

  def lube_chain bike
    puts "Lubing chain of #{bike}"
  end

  def check_brakes bike
    puts "Checking brakes of #{bike}"
  end

end

class Bike_Shop
  attr_accessor :mechanic
  def initialize worker=Mechanic.new
    self.mechanic = worker
  end

  def full_service_all bicycles
    for bike in bicycles
      self.mechanic.full_service(bike.color)
    end
  end

  def clean_all_bicycles bicycles
    for bike in bicycles
      self.mechanic.clean_bicycle(bike.color)
    end
  end

  def pump_all_tires bicycles
    for bike in bicycles
      self.mechanic.pump_tires(bike.color)
    end
  end

  def lube_all_chains bicycles
    for bike in bicycles
      self.mechanic.lube_chain(bike.color)
    end
  end

  def check_all_brakes bicycles
    for bike in bicycles
      self.mechanic.check_brakes(bike.color)
    end
  end

end

















































