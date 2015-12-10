require 'sinatra'
require 'sinatra/reloader'

@joke = ""
@punch_line = ""
@laugh = "Ha Ha Ha"

get '/' do
  "<h1>#{@joke}</h1><p>#{@punch_line}</p>"
end

get '/joke' do
  "Why did the chicken cross the road?"
end

get '/:name' do
  "Hey #{params['name']}!!"
end

get '/joke/:name' do
  "Why did #{params['name']} cross the road?"
end

post '/joke/make joke/:joke/:punch_line' do
  @joke = params['joke']
  @punch_line = params['punch_line']
end
