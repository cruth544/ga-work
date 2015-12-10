require 'pry'
require 'colorize'
require_relative 'blender'

Blender.blend
=begin
 /////////Using `pry` to debug/////////
 Install by running `gem install pry` in your command line
 Pry allows you to set a breakpoint anywhere in your ruby code calling the method `binding.pry`
 Type `exit` in your command line to leave the breakpoint and resume running your code

 More info on pry at https://github.com/pry/pry

 /////////INSTRUCTIONS FOR HOMEWORK/////////

 In 'blender.rb' create a class called Blender
 Reference that file at the top of this file
 Inside of the Blender class, write a method called `blend`.
 The method should take an array of ingredients and returns a mixed (chopped up) string of characters.

 Example:
 Blender.blend(["strawberry", "banana", "nutella"])
  #=> "abasnratrwrlanebalutnye"

 Be sure to remove any spaces, as we don't want any air bubbles in our smoothie!

 Give the blender an on and off switch and only allow the blender to function when it's on.
 FOR SAFETY'S SAKE When you create a new blender by default it should be off.

=end

# Sample of ingredients to get you started...
# Every Morning I make a smoothie with the follow ingredients:
smoothie_ingredients = [
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

=begin
 Create a method inside of this file that will run when `ruby smoothies_starter.rb` is ran
 Call that method down here to run the app

 docs that may help
 http://www.ruby-doc.org/core-2.0/Hash.html
 http://ruby-doc.org/core-2.0/String.html
 http://ruby-doc.org/core-2.0/Array.html
=end
