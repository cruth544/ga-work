require_relative 'get_input'
# require 'colorize'

class Blender
  @@is_on = false

  def self.blend
    if @@is_on
      ingredients = Input.get_input
      ingredients = ingredients.flatten.shuffle
      # binding.pry
      self.print_all ingredients
    else
      100.times do
        puts ""
      end
      system "clear" or system "cls"
      puts "Blender is off"
      puts "Would you like to turn on the blender?"

      if self.prompt
        @@is_on = true
        system "clear" or system "cls"
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
      system "clear" or system "cls"
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
    puts "Here is your smoothie!\n"
    for letter in ingredients
      print letter.char.colorize(letter.color)
    end
    puts "\n\nEnjoy!"
    self.blend_again
  end

  def self.blend_again
    puts "Would you like to blend something else?"
    answer = gets.chomp.downcase
    if answer == "yes"
      self.blend
    elsif answer != "no"
      system "clear" or system "cls"
      puts "Please answer 'Yes' or 'No'\n"
      self.blend_again
    end

  end

end
