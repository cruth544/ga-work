require_relative 'get_input'
require_relative 'ingredients'

class Blender
  @@is_on = true
  @smoothie_ingredients = [
  'flax seeds',
  'chia seeds',
  'coconut flakes',
  'spirulina',
  'pumpkin seeds',
  'oatmeal',
  'coco powder',
  'peanut butter',
  'almonds',
  'walnuts',
  'spinach',
  'greek yogurt',
  'nutrional yeast',
  'brussel sprouts',
  'asparagus',
  'kale',
  'brocoli rabe',
  'blue berries',
  'chopped banana',
  'straw berries',
  'mango',
  'hemp milk'
]

  def self.blend
    if @@is_on
      # ingredients = Input.get_input
      ingredients = Ingredients.colorize_everything @smoothie_ingredients
      ingredients = ingredients.flatten.shuffle
      # binding.pry
      self.print_all ingredients
    else
      puts "Blender is off"
      puts "Would you like to turn on the blender?"

      if self.prompt
        @@is_on = true
        self.blend
      end
    end
  end

  private
  def self.prompt
    answer = gets.chomp.downcase
    if answer == "yes"
      return true
    elsif answer == "no"
      puts "Blender was not turned on"
      return false
    else
      puts "Please answer 'Yes' or 'No'"
      self.prompt
    end
  end

  def self.turn_on
    @@is_on = true
  end
  def self.turn_off
    @@is_on = false
  end

  def self.print_all ingredients
    # puts "Here is your smoothie!\n"
    width = 16
    num   = 16
    line = self.spaces
    for i in 0..ingredients.length - 1
      letter = ingredients[i]
      # binding.pry
      if i % width == 0
        if ingredients.length - i < 32
          width -= 2
          num += 1
        end
        line += self.spaces num
        line += "\n"
        line += self.spaces num
      end
      line += letter.char.colorize(letter.color)
    end
    # for letter in ingredients
    #   line += letter.char.colorize(letter.color)
    # end
    line += self.spaces
    puts line
    puts "\n\nEnjoy!"
    self.blend_again
  end

  def self.blend_again
    puts "Would you like to blend something else?"
    answer = gets.chomp.downcase
    if answer == "yes"
      self.blend
    end
  end

  def self.spaces max=16
    str = ""
    for i in 1..max
      str += " "
    end
    return str
  end


end


# puts "
# 00000000000000000000212345678931234567894123456789512000000000000000000000"

# 00000000000000007892123456789312345678941234567890000000000000000




































































