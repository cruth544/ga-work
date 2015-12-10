require 'sinatra'
require 'sinatra/reloader'

get '/' do
  @name = "Sinatra"
  haml :index, layout: :layout
end

get '/hello_world' do
  erb :index
end

get '/hello_haml' do
  haml :index, layout: :layout
end


get '/la' do
  "I am La\n"
end

get '/hello/:name' do
  "Hello #{params['name']}!"
end

not_found do
  "<h1>Error: Path Not Found.</h1><p>That's life...</p>
  <a href='/'>Go Home</a>"
end
