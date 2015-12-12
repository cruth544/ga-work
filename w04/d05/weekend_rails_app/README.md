![lab](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/Exercise_icon_md.png?raw=true)

## Rails Weekend Lab



# Gyftrly - Christmas Gift Shopping List



#### Requirements:

1. Create a fully CRUDable rails app.
2. Your app should have one model, `Gift`.
3. Your model should have the following 6 field types (plus any additional ones you want to add)
   1. :title (string)
   2. :recipient (string)
   3. :image_url (string)
   4. :description (text)
   5. :is_purchased (boolean)
   6. :price (decimal{10,2})
   7. **any other fields you want … **
4. Style it to look AS professional as possible.

### Getting Started:

1. Create a rails app
   
   ``` 
   - `rails new gyftrly --skip-test-unit`
   ```
   
2. Create your models
   
   ``` 
   - Create your model using the data fields added above
   
   (WARNING: make sure you check this 3 times for errors before hitting ORANGUTAN)
       
   	* Example: `rails generate model Car make:string description:text inventory:integer is_automatic:boolean date:datetime price:decimal{10,2} image_url:string` 
   ```
   
3. In command line run `rake db:migrate` to update the database with your new model
   
4. In your `seeds.rb` create at least 10 different gifts and add them to the database by running `rake db:seed` in the command line (only run this command once). 
   
5. Create your model's controllers and CRUD functions.
   
   ``` 
   - Example: `rails generate controller cars`
   - Make all of our necessary CRUD views, methods and routes.
   	* Figure out how you handle adding a new gift to your shopping list that doesn't exist in your database yet.
   ```
   
6. On the index page, make it so that gifts have no more than 3 field types displayed. (ie. only title, recipient and image). The rest of your information should be available in the show page only.
   
7. Create a form for creating/updating gifts in your database.
   
8. Inside of your `views/layouts/application.html.erb` add a nav bar before the `<%= yield %>` and a footer after it. Style these to be representative of your app.. they should appear on every page of your app.
   
9. AND MOST IMPORTANTLY...
   
   #### Make all pages look CLEAN and stylish.



### That means we don't want your forms to look like this:



![ugly](https://raw.githubusercontent.com/keyanbagheri/GA_WDI_Public_Assets/master/images/first_rails_lab/ugly.png)

### Instead we want them to look like this:



### ![clean](https://raw.githubusercontent.com/keyanbagheri/GA_WDI_Public_Assets/master/images/first_rails_lab/clean.jpg)

### Or if you are feeling super fancy... this:



### ![super clean](https://raw.githubusercontent.com/keyanbagheri/GA_WDI_Public_Assets/master/images/first_rails_lab/super_clean.png)		

## Bonus

1. Figure out how to order and display your gifts programmatically in your index.
   
   EXAMPLE SPECS:
   
   - Index should display items that have not yet been purchased in a seperate section at the top.
     
   - Index should display gifts in the order of recipients. If two or more gifts have the same recipient they should be grouped together
     
   - If a user saves a gift with no image, your app should show a default image
     
     - Something like this…
       
       ![gift](http://www.artmatthewsonlinepianolessons.com/wp-content/uploads/Present-icon.png)
     
   - TEST ALL THESE SPEC CASES BY CREATING EACH SCENERIO YOURSELF
   
2. Figure out how to neatly put the "create gift form" somewhere in your index page so that a user can easily add to the list. Perhaps some nice styling could get the form to display on just one or two lines, or maybe you could even use a javascript pop-up/modal. Once you have successfully done this.. be sure to remove the unecessary view/route/method for `new` from your app (cut the fat out)!
   
3. Find out how to install the `Bootstrap gem` on your app and style it up with many bootstrap elements (tables, nav bars, headers, buttons, grids)
   
4. Implement another cool ruby `gem` to add to your site. Maybe a gem that helps you style it better, or a gem that allows you or your users to do something cool in your site.
   
   - Examples ([pry-rails](https://github.com/rweng/pry-rails), [better_errors](https://github.com/charliesome/better_errors), HAML, Compass)