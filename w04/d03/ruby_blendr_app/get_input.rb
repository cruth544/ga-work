require_relative 'ingredients'

class Input
  def self.get_input
    ingredients = []
    system "clear"
    puts "To submit, enter 'Run' or hit enter again"
    puts "What would you like to blend?\n\n"
    loop do
      item = gets.chomp
      break if item == "run" or item == ""
      ingredients.push(item)
    end
    ingredients = Ingredients.colorize_everything ingredients
    # binding.pry
    return ingredients
  end

end
