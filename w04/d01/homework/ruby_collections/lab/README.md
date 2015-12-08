![lab](https://github.com/keyanbagheri/GA_WDI_Public_Assets/blob/master/images/_ga_lesson_icons/Exercise_icon_md.png?raw=true)

## Excellent Party Planner

We have a party to plan. But some of our guests are under 21. We have to Help us figure out how many people to buy booze for and how many people to buy virgin drinks.

1. [creating a file] Create a new ruby file named **party_planner.rb**
2. [arrays] Inside of that file create a blank array called **guest_list**.
3. [hashes] Create five or more hashes inside the array. Each hash will have two key/value pairs. A **:name** (String) and an **:age** (Fixnum).
4. [methods/conditionals] Now for the tricky part. Create a method that will take any person (one of the above Hashes located in our **guest_list**) as a parameter. Inside the method, create a conditional that checks to see if a person's age is above or below 21. It should return true if they are of legal drinking age and false if they are not.
5. [looping] Create another method. The goal of this method is to tally how many guests will be having alcohol and how many will not. Inside of the method, create two variables, one named **underage** and one named **of_age** and assign each of them to the number 0. Next, create a loop that will iterate through an array (like our array called **guest_list**) and check if each guest is of age by calling the method we previously defined in step 4. If a guest is under 21, then your loop should increment **underage** by one otherwise you should increment **of_age** by one.

<br>

So...

<br>

How many people will get to wear the super cool wristband, and how many people are going to have the dreaded underage "X" stamped on their hands?

<br>

![Party on dudes](http://www.quickmeme.com/img/43/4329eaad883fb16081928c2f7218a0a8c372e2442d5b14bd6da4db0165e72b3c.jpg)

<br>

Bonus:

1. Create a method that will print out a list of names of people who are able to drink and a list of people who are not able to drink.
2. Add a counter to calculate the exact number of drinks you would need for the party, based on the idea that each person will have 4 drinks total throughout the night.
3. Create a method that adds a new party guest to the **guest_list**. Using gets, ask the new guest to give you their name and their age. Then you should add them to the list.

<br>

Take time and experiment:

<br>

* Modify your loop and try the different looping methods we saw in class.


* Rewrite your conditional to use **case**/**when**.


* Do some other awesome things...