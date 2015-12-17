# Modeling Relationships: Setting Up Shop

## Introduction

Imagine, at some date at least seven weeks in the future, that your friend has invited you to be their technical co-founder on a can't-lose venture: with their marketing acumen and your raw technical skill, you're going to *sell* things on the *Internet*. Truly, a radical and visionary idea. Over $4 cappuccinos, you and your friend hash out what models are needed to get your MVP out the door:

* Your store needs three models: `User`, `Order`, and `Product`.
* A `User` can have many `Order`s, but an `Order` only has one `User`.
* A `Product` can have many `Orders`, **and** an `Order` can have many `Products`. 

You go home, fire up your Terminal, and `rails new` this sucker. You `rails g` all your models, give them some sane properties, and then your realize that something is missing... something you can't quite put your finger on...

## Exercise

#### Requirements
* If it helps (it always helps), spend a few seconds drawing out the ERD described above. Pay particular attention to the quantity of the relationships– does Model A have one or many of Model B? What about Model B of Model A?
* Looking at your ERD diagram, figure out which tables need foreign keys, and write a migration for each model to add them. [This doc](http://apidock.com/rails/v4.2.1/ActiveRecord/ConnectionAdapters/SchemaStatements/add_reference) may be helpful to you.
* In your ActiveRecord models, write in `has_many`, `belongs_to`, and `has_and_belongs_to_many`, as needed to model the relationships.
* In your `rails console`, after you set up some test data, you should be able to run:
* `User.first.orders`
* `Order.first.users`
* `Product.first.orders`
* `Order.first.products`
* Bonus:
* Can we have a model called `LineItem`, which represents a user ordering a particular product? How would we use `has_many through:` to make this happen?
* Get creative with querying our data. How would you do something like `User.first.products` or `Product.first.users`?


#### Starter code

The code described in the Introduction has already been written for you– that is, you shouldn't need to generate any new models, and should only need to add a line or two to each existing model to make this work. 

