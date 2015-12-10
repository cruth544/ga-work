require_relative 'char'

class Food
  def self.colorize_word word
    word          = word.split('')
    color         = self.random_color
    colored_word  = []
    for char in word
      if char == " "
        next
      end
      colored_word.push(Char.new char, color)
    end
    # binding.pry
    return colored_word
  end

  private
  def self.random_color
    return String.colors[Random.new_seed % String.colors.length]
  end

end
