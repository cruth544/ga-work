require_relative 'ingredients'

class Input
  def self.get_input
    ingredients = []
    system "clear" or system "cls"
    puts "To submit, enter 'Run' or hit enter again"
    puts "\nWhat would you like to blend?\n\n"
    loop do
      item = gets.chomp
      break if item == "run" or item == ""
      ingredients.push(item)
    end
    if ingredients.length < 1
      return self.get_input
    end
    ingredients = Ingredients.colorize_everything ingredients
    # binding.pry
    return ingredients
  end

end
