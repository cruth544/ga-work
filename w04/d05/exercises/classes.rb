class Movie
  # attr_accessor :director
  @director

  class << self
    attr_accessor :producer, :counter
  end
  @@producer = "Bob" # will be available to all instances
  # in case there are no instances this is still accessible
  @@counter = 0
  # self.producer = "Joe"
  def initialize(director) # local variable
    @director = director  # instance variable
    @@counter += 1
  end
  def call_director
    puts director
  end
end
puts Movie.producer # will equal to "Bob"
puts Movie.counter


movie1 = Movie.new "John"
puts movie1.director
