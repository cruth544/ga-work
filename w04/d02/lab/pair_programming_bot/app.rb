require 'sinatra'
require 'sinatra/reloader'

@sentence

class Bot
  @@position = 0
  @@questions = [
    "Do you have a test for that?",
    "Does the test pass?",
    "Need to refactor?"
  ]
  @@suggestions = [
    "Write a test.",
    "Write just enough code for the test to pass.",
    "Refactor the code.",
    "Select a new feature to implement."
  ]

  def self.go forward
    if forward
      question = @@questions[@@position]
      @@position += 1
      if @@position == @@questions.length
        @@position = 0
      end
      question
      # if @@position >= @@suggestions.length
      #   @@position = 0
      # end
    else
      @@suggestions[@@position]
    end
  end

  def self.reset
    @@position = 0
  end

end


get '/:position' do
  #{params[:position]}
  @sentence = Bot.go(true)
  haml :index, layout: :layout
end
