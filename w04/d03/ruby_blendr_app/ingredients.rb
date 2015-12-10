require_relative 'food'

class Ingredients

  def self.colorize_everything list
    colored_list = []
    for item in list
      # binding.pry
      colored_list.push(Food.colorize_word item)
    end
    # binding.pry
    return colored_list
  end

end
