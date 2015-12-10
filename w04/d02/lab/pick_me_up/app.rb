require 'sinatra'
require 'sinatra/reloader'

@current_compliment

class Compliment
  @color_classes = ["red", "blue", "green", "cyan"]
  @compliments_list = [
    "You are freakishly good at thumb wars.",
    "Strangers all wanna sit next to you on the bus.",
    "Your siblings are pissed that your photo is the star of your parent's mantle.",
    "People always think your jeggings are regular jeans.",
    "You could make up a weird religion or diet and everyone would follow it.",
    "80% of motorcycle gangs think you’d be a delightful sidecar.",
    "You are your parent's greatest accomplishment, unless they invented the 'spork'"
  ]

  def self.compliment
    random = Random.new_seed % @color_classes.length
    random_compliment = Random.new_seed % @compliments_list.length
    saying = "<h3 class='#{@color_classes[random]}'>"
    saying += @compliments_list[random_compliment]
    saying += "</h3>"
    saying
  end

end

get '/' do
  @current_compliment = Compliment.compliment
  haml :index, layout: :layout
end

get '/thanks' do
  @current_compliment = "You're Welcome!"
  haml :index, layout: :layout
end
