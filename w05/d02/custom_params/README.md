![GA](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/ga.png?raw=true)

## Custom Params and Route Resources in Rails

### Learning Objective(s)

* SWBAT use custom params to filter their index page.  
* SWBAT Understand that params is just a hash object filled with string objects that is passed from the browser to the server.  
* Know when to use custom params

### Essential Question(s)

* What does custom params mean?
* How can I use custom params?

### First a little light practice with params

* Recall what we did with our bean app to select by roasts, and students by grade
* Build a simple rails app and use custom params to just render a string on the next page

`rails new params_app -T`

`rails g controller params index next`

* Show a simple form on the index page 
* With a submit that points to ParamsController#next

``` ruby
<%= form_tag('/params/next', method: "get") do %>
  My name is: <%= text_field_tag :name %>
  My favourite language is: <%= text_field_tag :favourite %>
  <%= submit_tag "Submit page" %>
<% end %>
```

### Render plain

We can use `render plain: params` and see what are params are on the next page

``` ruby
  def next
    render plain:  params
  end
```

![lab](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/Exercise_icon_md.png?raw=true)

Take 5 minutes and create a string on our `next` viewpage that states what the user's name and favourite language.



### ISDb (Internet Superhero Database) app

> This app is located in the `w05/d02` folder of this repo. 

We're the most villianous villian around but lately we've been having problems tracking different superheroes we have data on. We have an app that displays a ton of data on superheroes but right now its all jumbled up, we have no way to search and narrow down this list! 

This is a good problem to have if you're a supervillian btw.

> Before we start, CD into the app and run `rake db:migrate seed

#### Let's get started with our routes

First we need to set up our routes. Let's use rails built in function 'resources'

``` ruby
	resources :heroes
```

Run `rake routes` in CL to see what you get.

This gives us many routes that we don't need.

But we can remove some if we please. For this app we don't need any Creating, Updating or Deleting… only Reading. So let's remove the routes we don't need

``` ruby
	resources :heroes, except: [:destroy, :new, :show]
```

Or limit our resources only to what we need.

``` ruby
	resources :heroes, only: [:index, :show]
```

Remember we can set up our root route (aka `"/"` to automatically point to a specific controller action/view of our choosing.

``` ruby
	root "heroes#index"
```

#### Now let's make navigation between show pages easier

In our show view/method we can add "Next" and "Prev" buttons and use our params to figure out which id is next

``` ruby
<%= form_tag(hero_path, method: "get") do %>
    <%= submit_tag "Prev", "class" => "btn btn-primary" %>
    <%= submit_tag "Next", "class" => "btn btn-primary" %>
<% end %>
```

``` ruby
def show
	if params[:commit] == "Next"
		hero = Hero.find(params[:id].to_i + 1)
		redirect_to hero_path(hero)
	elsif params[:commit] == "Prev"
		hero = Hero.find(params[:id].to_i - 1)
		redirect_to hero_path(hero)
	else
  	@hero = Hero.find(params[:id])
	end
end
```

We can impliment a form that will pass params to our show action so that we can show a specific hero by giving an id

``` ruby
<%= form_tag(hero_path, method:"get") do %>
  See another superhero (by id) <%= text_field_tag :hero_id %>
  <%= submit_tag "Go", "class" => "btn btn-primary"%>
<% end %>
```

And our show method

``` ruby
def show
	if params[:commit] == "Next"
		hero = Hero.find(params[:id].to_i + 1)
		redirect_to hero_path(hero)
	elsif params[:commit] == "Prev"
		hero = Hero.find(params[:id].to_i - 1)
		redirect_to hero_path(hero)
	elsif params[:commit] == "Go"
		hero = Hero.find(params[:hero_id])
		redirect_to hero_path(hero)
	else
  	@hero = Hero.find(params[:id])
	end
end
```

Let's build a form in our `index` that lets us submit a search

``` ruby
<%= form_tag('/heroes', method:"get") do %>
  Search Superhero name: <%= text_field_tag :query %>
  <%= submit_tag "Search", "class" => "btn btn-primary"%>
<% end %>
```

Now we want implement the controller to find heroes who have that name

Heres an example looking up superheroes named "Hackerella"

``` ruby
Hero.where(name: "Hackerella")
```

Your controller should look like this

``` ruby
def index
  if params[:query]
  	@heroes = Hero.where(:name => params[:query])
  else
	@heroes = Hero.all
  end
end
```

We could use conditionals to create a search that isn't case specific

``` ruby
def index
	if params[:query]
		hero_list = Hero.all
		@heroes = []
		hero_list.each do |hero|
			if hero.name.downcase.include? params[:query].downcase
				@heroes << hero
			end
		end
	else
    @heroes = Hero.all
  end
end
```

After that, try having a select box that lets you select what you want to search by, name, or alias. (hint check out the rails docs for `select_tag` [here](http://api.rubyonrails.org/classes/ActionView/Helpers/FormTagHelper.html#method-i-select_tag))

``` ruby
<%= form_tag('/', method: 'get') do %>
  Search Superhero by
  <%= select_tag "search", options_for_select(["name", "identity", "powers", "location"]) %>
  : <%=text_field_tag :query %>
  <%= submit_tag "Search", "class" => "btn btn-primary"%>
<% end %>
```

and now we need to change our controller to work with this new search functionality

``` ruby
def index
  if params[:query] && params[:search]
    # "name"
    search_by = params[:search].to_sym
    # :name
    query = params[:query]
    @heroes = Hero.where(search_by => query)
  else
    @heroes = Hero.order(:location)
  end
end
```

again we can use conditionals to make a non case-specific search

``` ruby
def index

	if params[:query]
		search_field = params[:search].to_sym
		query = params[:query]
		hero_list = Hero.all
		@heroes = []
		hero_list.each do |hero|
			if hero[search_field].downcase.include? query.downcase
				@heroes << hero
			end
		end
	else
    @heroes = Hero.all
  end
end
```

### Sorting

in our index.html.erb replace our "Name" table header with this

``` erb
<th><%= link_to "Name", sort_path %></th>
```

and in our controller

``` ruby
def sort
  @heroes = Hero.order(:name)
  render :index
end
```

finally our route

``` ruby
get "heroes/sort" => "heroes#sort", as: :sort
```

we can use descending order too

add this class variable to the top of our controller

``` ruby
@@descending = false
```

change our sort method to this

``` ruby
def sort
  if @@descending
      @heroes = Hero.order(name: :desc)
      @@descending = false
  else
      @heroes = Hero.order(:name)
      @@descending = true
  end
  render :index
end
```

Try it out and see what happens

![lab](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/Exercise_icon_md.png?raw=true)

Take five minutes and set up sort links for alias, superpower, and location

---

### Putting it all together

in our index

``` erb
<th><%= link_to "Name", sort_path(order_by: "name") %></th>
<th><%= link_to "Alias Supposedely", sort_path(order_by: "identity") %></th>
<th><%= link_to "Superpowers", sort_path(order_by: "powers") %></th>
<th><%= link_to "Location...maybe", sort_path(order_by: "location") %></th>
```



in our controller

``` ruby
def sort
  if @@descending
      @heroes = Hero.order(params[:order_by] + ' DESC')
      @@descending = false
  else
      @heroes = Hero.order(params[:order_by])
      @@descending = true
  end
  render :index
end
```

---

### Pagination

We're going to set up some cool pagination using a sweet gem **Kaminari**

Kaminari is really awesome and it sets up pagination by using custom params and then sending them to the controller

install the gem

`gem 'kaminari'`

and then bundle

this gives us access to a cool little helper in our rails console. open it up and try

``` ruby
Hero.page(1)
```

What is this doing?

it'd be cool if we could make it so our rails app only loaded a certain amount of superheroes per page rather than loading all of them.

Right now our controller loads all the superheroes, make it so it uses our new `#page` method so maybe it only loads the first page.

``` ruby
@heroes = Hero.page(params[:page]).per(5).padding(0)
```

Kaminari sets it so that our `param` is called `page`

Now our app should respond to a url like `http://localhost:3000/heroes/?page=3`

After this is done just throw this somewhere in the index page

``` ruby
<%= paginate @heroes %>
```

###### To fix any errors...

index.html.erb

``` erb
<% if @paginate %>
  <%= paginate @heroes %>
<% end %>
```

heroes_controller.rb

``` ruby
def index
  if params[:query] && params[:search]
    @paginate = false
    # "name"
    search_by = params[:search].to_sym
    # :name
    query = params[:query]
    @heroes = Hero.where(search_by => query)
  else
    @paginate = true
    @heroes = Hero.page(params[:page]).per(5).padding(0)
  end
end
```





### resources

<https://github.com/amatsuda/kaminari>

<br>

<https://github.com/stympy/faker>

<br>

<https://github.com/RobAWilkinson/superhero-gem>