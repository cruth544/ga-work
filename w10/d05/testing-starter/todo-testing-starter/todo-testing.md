## Angular Todo App Testing

In what follows we'll build up some unit tests on the canonical front-end framework example: The todo list. 
This is a well known example, and we'll work through the unit tests one by one, with the goal being to understand
the approach. 

First a primer on unit tests in general. 

####Javascript Testing Primer

####Why do we test code...in an _automated_ fashion. 

Mark Ethan Trostler ( Google )..from _Testable Javascript_  : 
>You have to write unit tests, so quit messing around and write some.

From the angular docs ( Many people at Google ):
>JavaScript is a dynamically typed language which comes with great power of expression, but it also comes with 
almost no help from the compiler. For this reason we feel very strongly that any code written 
in JavaScript needs to come with a strong set of tests. We have built many features into 
Angular which makes testing your Angular applications easy. So there is no excuse for not testing.

####So the key to writing _great_, _maintainable_ code... : we must test...and we must test in a particular fashion. 

####Different types of tests:
* Unit Tests (Isolate a small piece of functionality and test only that)
* Regression Tests (Ensure no bug creep with new features, guard against known bugs appearing in the future)
* Integration Tests (End to End Test)

####Unit tests

Unit tests concern themselves with testing the smallest unit of meaninguful functionality...in _isolation_. We also have the notion of 'code coverage' or the number of lines of code exercised by a test suite. 

What we want to do is test a small piece of code that does one conceptual thing: 

```javascript
function add (a,b) {
   return a + b
}
```

####What makes a good unit test?

Good Test  = Code coverage + Test Edge and Non Edge Cases of parameters + Mocked Dependencies( Isolation )

Code coverage alone is not good enough when unit testing...we must work the possible values of the parameters to ensure the functionality we expect. 

####Some possible pseudocode to test the sum function

- Set two variables, a = b = 2
- Set a variable named result = 0
- Call sum function and assign the return value to result
- Check that 'result === 4'
 
####Can we guarantee that the sum function works?

* We didn't check that passing two strings in would add the strings correctly. 
* A string and a number??....null or NaN??
* Is the function specified for only numbers? ( This points to the value of good documentation )

####Isolation 

_Load only the bare miniumum required for a test_

In general you will probably be testing at the individual method level...provided your methods are well designed and exercise the _Single Responsibility_ principle. 

Isolation is the concept by where we are introduced to the idea of 'Mocks' or 'Stubs'. Essentially the goal is to isolate the code under test by 'mocking out'..or 'stubbing' other parts of the code it depends on. 

####Scope

Scope must be small. Examine the smallest piece of functionality that makes sense..in isolation.  Only the method is being examined...and all dependencies are mocked out. 

Our goal is to have a large number of unit tests...each with a small scope. 

####Another look at sum

We can't test our function well unless we know _*exactly*_ what to test for...and in that respect..a fully commented function is a beautiful thing (And people reading the code will think that a pro, and not an amateur wrote it). Lets take a look: 

```Javascript
/* 
* This function adds two numbers, otherwise return null
* 
* @param a first Number to add 
* @param b second Number to add 
* @return the numerical sum or null
*/ 
function sum (a,b) {
   return a  + b
 }
```

Does the code live up to the comments?

####Writing tests before code...or...'TDD'

The school of thought here is basically this...writing tests has been proven to increase software quality...and the number of tests written is positively coorelated with quality. So we need tests..but developers are lazy..so what do we do? 

In this case we advocate writing tests before you write any 'working' code. What does this do? 

You first write a test that fails, this test will examine a piece of functionality that does not exist. By writing the test first, the tesst then serve as a _Specification_. This is a bonus.  

The most important effect of writing the test first though is that.... _*The tests are ensured to get written!!*_. This is a critical point...by far most important thing is that we actually end up with working tests. 

####Positive Testing

Positive testing is ensuring that what you expect will happen does...meaning the 'common path' or how you most expect the method to be called. 

```Javascript
it(" Adds By Param! ", function() { 
    var a= b= 2;
    var expected = 4; 
   
    expect( sum(a,b) ). toEqual( expected ); 
    
})

```
####Negative Testing

Can the code handle values that it's not expecting? This is where we beat up the code and think of ways to break it.
Here we want to stress test the parameters for values we might not expect in normal use. 

```Javascript
it(" Adds By Param! ", function() { 
    var a=2;
    var b;  //Note b is undefined here
    
    var expected = null; 
   
    expect( sum(a,b) ). toEqual( expected ); 
    
})
```

## Building Tests for the Todo app. 

### Karma setup

We'll first go through the process of setting up karma to run our tests

```bash
$ npm install karma
$ npm install karma-jasmine karma-chrome-launcher

#go through the series of questions 
$ karma init

```

We'll need to edit the karma config file, make sure you have the correct files specified

> karma.conf.js

```javascript
// frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-resource/angular-resource.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'js/**/*.js',
      'test/unit/**/*.js'
    ],

```

### Writing the tests 

At this point we can open up our *todoCtrlSpec.js* file and write some initial code to setup our test environment

> test/unit/todoCtrlSpec.js

```javascript
/* wrap everything in a Immediately Invoked Function Expression,
   this will allow us to execute all of our test code in strict mode,
   which can help reduce errors. 
*/
(function () {
	'use strict';

    //A describe block is our basic unit of test. 
	describe('Todo Controller', function () {
		

    });
}());
```

### Test Setup

For angular tests, there is some infrastructure that we need to setup in order to get things going. Once properly setup,
this infrastructure allows us to test with ease. 

Whether it be *jasmine* or *mocha*, each framework will provide some nice functions for us to use expressly for this purpose. 
This function is called **beforeEach**. We provide a function of our own definition to *beforeEach*, and that function is run
*before each* *it()* function. This can sometimes be confusing, just because it is declared only once at the top of the test suite,
don't make the mistake of assuming these functions execute only once. **Remember**, they execute after each *it()*.

The code that follows will be placed directly inside the function that is the 2nd argument to our *describe* function above. 

```javascript

/* declare three variables we will use, ctrl,scope,store
NOTE: *scope* is another way of referring to *this* or *self;
so think *self* when you see *scope*. 
*/
var ctrl, scope, store;

// we will load an instance of our module before each test case
beforeEach(module('todomvc'));

//here we are setting up a couple things we need in the test
beforeEach(inject(function ($controller, $rootScope, localStorage) {
	
	/*every controller need a scope injected into it, so we create one
	  here that we'll inject into our controller below */
	scope = $rootScope.$new();
    
	store = localStorage;

	localStorage.todos = [];
	localStorage._getFromLocalStorage = function () {
		return [];
	};
	localStorage._saveToLocalStorage = function (todos) {
     	localStorage.todos = todos;
	};

    //create our controller and pass into it the objects we have created
	ctrl = $controller('TodoCtrl', {
		$scope: scope,
		store: store
	});
	
	
	//First four tests will be placed below:
	
}));

```

### Tests of Initial Conditions

Let's next look at our first three tests, which we'll place below the code we have above. 

```javascript
it('should not have an edited Todo on start', function () {
	expect(scope.editedTodo).toBeNull();
});

it('should not have any Todos on start', function () {
	expect(scope.todos.length).toBe(0);
});

it('should have all Todos completed', function () {
	scope.$digest();
	expect(scope.allChecked).toBeTruthy();
});

```
Here's what the tests are doing

1) The first test is asserting the fact that when the app first loads, there shouldn't be any items
that have been edited. That makes sense, if no one has had a chance to click the edit button, no edits should
have occurred. Remember we inject a brand new scope into the controller for each test, so our scope should not
have any modifications, and therefore no edits. 

2) The second test is very similar to the first, it relies on the same logic, if no one has had an opportunity
to do anything, there should be no todos present, therefore scope.todos length should be 0.  

3) For the third test it's really important to take a moment and really understand what's going on. What is the 
*scope.$digest()* business? It is a method call that triggers a *digest cycle*, and a *digest cycle* is essentially 
angular's way of keeping everything updated and in sync. In effect it's saying, "hey, check if the UI has been updated at 
all, and if it has, propagate those changes to the ng-models on the scope". So the scenario amounts to: 

* A user clicks a completed button
* Digest cycle is triggered manually
* Check if scope.allChecked has been updated
* Expect this to be true 

What gives though? We don't have any completed todo's right?? Correct....however...we don't have *any todo's* at all,
so the remaining count is 0. Below is the relevant code in our controller

```javascript
//check how many todos we have left by filtering for {completed: false}
$scope.remainingCount = $filter('filter')(todos, { completed: false }).length;

/* the trick here is that 0 is a falsy value in javascript, so if there is even
   1 remaining all checked will be set to false, as we negate remaining count */
$scope.allChecked = !$scope.remainingCount;

```

So due to the fact that we have zero todos, and therefore 0 as a value for $scope.remainingCount(), and considering that 
we negate 0(falsy), giving us *true*, we can reason about why our test passes. 

Pay special attention to *$scope.$digest()*. Much of the time in angular *$scope.$digest()* is called implicitly by other
parts of angular, however in our tests we call it explicitly to make sure that values have been updated before we check
them in our *expect* statements. 

### Tests of our filter

Let's describe our next block of tests, which will test our filter. We'll look at each in turn, adding them into our test suite. 

####Test 4
```javascript

describe('the filter', function () {
	it('should default to {}', function () {
		scope.$emit('$routeChangeSuccess');
       
		expect(scope.status).toBe('');
		expect(scope.statusFilter).toBeNull();
	});
	
	
	//All subsequent tests for filter will go directly below: 
});	
```

4) In this test we are looking at the default behavior of the filter, when it does not match one of the cases, where we expect it to
return an empty object. Let's look at the actual controller code so we can understand what's happening. 

```javascript
$scope.$on('$routeChangeSuccess', function () {
	var status = $scope.status = $routeParams.status || '';
	$scope.statusFilter = (status === 'active') ?
		{ completed: false } : (status === 'completed') ?
		{ completed: true } : {};
});

```

The first thing to note is *$scope.$on('$routeChangeSuccess'...*.  This means we are effectively listening for the 
*'$routeChangeSuccess'* event, which means a user has selected to view either the 'active' or 'completed' items. The filter
itself checks to see what the value of $scope.status is. It asks: is it 'active' or 'completed'?.  

The $scope.statusFilter itself employs a somewhat fancy compound ternary statement to basically set the filter to return todos that
haven't been checked as done if the status is 'active', and return all the todos that have been checked as done if the 
status is 'completed'. If status doesn't match 'active' or 'completed', the filter will default to an empty object. 

This last case, the default or 'no match' case, is the functionality that our fourth test is verifying. 

Ok, now that we hopefully understand what is we're testing, let's talk a bit about how we're actually testing it. 

Of interest is the call to *scope.$emit('$routeChangeSuccess');*. Remember our filter is hooked up to an event handler
that is listening for the *$routeChangeSuccess* event, so in order to properly test it we need to trigger that event. As
you probably figured, $scope.emit$('$routeChangeSuccess') is doing just that, it triggers the event we pass as an
argument. 

The other interesting part, and one that is something of a gotcha for new testers, is doing object comparisons. If we
did this: 

```javascript
expect(scope.statusFilter).toBe({});
```

we might expect it to be true. This is false though because two objects are not considered strictly the same unless they point to 
the same location in memory. In other words since we have two separate objects in the above example, what we might expect to be true: 
*two empty objects are the same*, is actually false. So we must use *deep comparison*, provided by *toEqual*, which will compare the 
objects fields, and if they are the same, then the objects will be considered equal, and so the statement will be true. 

####Test 5
```javascript
//remember, this test goes *inside* the describe block above
describe('being at /active', function () {
	
	it('should filter non-completed', inject(function ($controller) {
		ctrl = $controller('TodoCtrl', {
			$scope: scope,
			store: store,
			$routeParams: {
				status: 'active'
			}
		});
       
		scope.$emit('$routeChangeSuccess');
		expect(scope.statusFilter.completed).toBeFalsy();
	}));
});
```

5) Much about this test is similar to our first filer test, essentially we are checking that when the use clicks to see
'active' todos, that the filter has a completed value of false. So it checks that we have hit the {completed: false} part
of the compound ternary, and we are indeed filtering for all the active todos. 

In order to do this, we have to have a way of setting our *$routeParams* in order to simulate what a user would do. As you can see
from the test itself, we accomplish this 'mock user clicking active' scenario by setting up our controller and setting the $routeParams.status to
'active'. 

Then, when we emit the '$routeChangeSuccess' event, it appears to our controller code that we are at the 'active' routing, 
and it behaves accordingly. 

####Test 6 
```javascript 
describe('being at /completed', function () {
	
	it('should filter completed', inject(function ($controller) {
		ctrl = $controller('TodoCtrl', {
			$scope: scope,
			$routeParams: {
				status: 'completed'
			},
			store: store
		});
       
		scope.$emit('$routeChangeSuccess');
		expect(scope.statusFilter.completed).toBeTruthy();
	}));
}); 
```	
		
6) Test 6 is pretty much exactly the same as Test 5 and doesn't introduce anything new. We are simply checking for
the opposite behavior of 'active', which is 'completed'. 

### Empty and whitespaced todos

These tests will examine the behavior of our app when a user enters empty todos, and todos having whitespace.

####Test 7

```javascript
describe('empty and whitespace Todos', function () {
	var ctrl;

	beforeEach(inject(function ($controller) {
		ctrl = $controller('TodoCtrl', {
			$scope: scope,
			store: store
		});
		
	}));

	it('should not add empty Todos', function () {
		scope.newTodo = '';
		scope.addTodo();
		scope.$digest();
		expect(scope.todos.length).toBe(0);
	});
	
	//Tests 8 and 9 will follow below: 
	
});	
```

7) As part of the setup for this particular sub suite of tests, we need to have a *store* property present and defined
on our controller. This is because the *addTodo()* method of our *todoCtrl* uses store internally to add a todo. If we don't
define it, the code will error out. 

After the initial setup, the logic of the test is fairly straightforward. 

* Attempt to add an empty todo(scope.newTodo = '')
* Call addTodo() method to save it
* Trigger the digest cycle so all values are updated throughout the controller
* We expect that nothing has been added to scope.todos because the todo was empy


####Test 8

```javascript
it('should not add items consisting only of whitespaces', function () {
	scope.newTodo = '   ';
	scope.addTodo();
	scope.$digest();
	expect(scope.todos.length).toBe(0);
});
```

8) Test 8 is almost identical to Test 7, except for the fact that whitespace counts as characters empty, so our
test above won't catch that case.  In this test we add empty whitespace characters and again try to add the todo. Our
test makes sure that we can't. To see how our controller is pulling this off, examine the *$scope.addTodo()* method in
*todoCtrl.js*

####Test 9

```javascript
it('should trim whitespace from new Todos', function () {
	scope.newTodo = '  buy some unicorns  ';
	scope.addTodo();
	scope.$digest();
	expect(scope.todos.length).toBe(1);
	expect(scope.todos[0].title).toBe('buy some unicorns');
});
```

9)  Test 9 is again similar to our previous tests, except that is verifying that leading and trailing whitespace
is trimmed from the todos. This is important so that todos can be displayed uniformly. 

### Testing save functionality

####Test 10

```javascript
describe('having some saved Todos', function () {
  var ctrl;

  beforeEach(inject(function ($controller) {
    ctrl = $controller('TodoCtrl', {
    	$scope: scope,
	    store: store
    });

    store.insert({ title: 'Uncompleted Item 0', completed: false });
    store.insert({ title: 'Uncompleted Item 1', completed: false });
    store.insert({ title: 'Uncompleted Item 2', completed: false });
    store.insert({ title: 'Completed Item 0', completed: true });
    store.insert({ title: 'Completed Item 1', completed: true });
  
    scope.$digest();
  }));
  
  it('should count Todos correctly', function () {
	  expect(scope.todos.length).toBe(5);
	  expect(scope.remainingCount).toBe(3);
	  expect(scope.completedCount).toBe(2);
	  expect(scope.allChecked).toBeFalsy();
  });
  
  //Place rest of tests below: 
  
});  
```

10) To start with, we are again looking at some setup code that will run inside a *beforeEach* function. Much is the same,
the only difference being this time we are setting up some todos in our store befure each test. 

In this test code we are actually making 4 separate assertions. It can be argued whether or not this is a good thing, however
the fact remains that the tests do fall under the guise of 'counting todos'. One could debate whether these should be broken out
into separate assertions, but the single test case with multiple assertions is pragmatic enough in this scenario. 

The logic of this test is pretty straightforward: We loaded up 5 todos via the before each statement, 3 were marked uncompleted, 2
were marked completed, we'll verify this, along with the length and the fact that allChecked should not be true(this would indicate
that all the todos had been marked completed, which is not the case). 


####Test 11

```javascript
it('should remove Todos w/o title on saving', function () {
	var todo = store.todos[2];
	scope.editTodo(todo);
	todo.title = '';
	scope.saveEdits(todo);
	expect(scope.todos.length).toBe(4);
});
```

11)  This test is a straightforward assertion that we should not be able to save todos that have an empty title. 

####Test 12

```javascript
it('should trim Todos on saving', function () {
	var todo = store.todos[0];
	scope.editTodo(todo);
	todo.title = ' buy moar unicorns  ';
	scope.saveEdits(todo);
	expect(scope.todos[0].title).toBe('buy moar unicorns');
});
```

12) Again, we are testing the save functionality, specifically the *scope.saveEdits*. This means that a user cannot update
 a todo an enter something, and not have the whitespace be trimmed. 

####Test 13

```javascript
it('clearCompletedTodos() should clear completed Todos', function () {
	scope.clearCompletedTodos();
	scope.$digest();
	expect(scope.todos.length).toBe(3);
});
```

13) This test is verifying that if we trigger the *scope.clearCompletedTodos()* method, the two completed todos should
be cleared, dropping the length of the scope.todos array down to 3. 

####Test 14

```javascript
it('markAll() should mark all Todos completed', function () {
	scope.markAll(true);
	scope.$digest();
	expect(scope.completedCount).toBe(5);
});
```

14) Here we verify that if we trigger the *scope.markAll()* method, passing in *true* as an argument, that all of our
todos are indeed marked as completed. 

####Test 15

```javascript
it('revertTodo() get a Todo to its previous state', function () {
	var todo = store.todos[0];
	scope.editTodo(todo);
	todo.title = 'Unicorn sparkly skypuffles.';
	scope.revertEdits(todo);
	scope.$digest();
	expect(scope.todos[0].title).toBe('Uncompleted Item 0');
});
```

15) If you follow closely the logic in this test you can see that we're checking that we can essentially rollback
an edit. 


###Closing Remarks

We have managed to write some basic unit tests for our application, which is great. We haven't however, produced a production quality
test suite. What are we missing?

####Coverage

The first thing we have to talk about is the important concept of *code coverage*, which refers to the total amount of code paths we have
exercised, divided by the total number of code paths. Think about that carefully for a moment, and let's take our filter tests as an example. 

How many different values does our filter return? It returns three: 'active','completed',and a default case. In our tests we have exercised and examined 
the results of those three different paths, so we might say that that particular piece of functionality has *100% code coverage*. Awesome, but 
what about the totality of our code, does it have 100% coverage? No it doesn't, and hence we have a large swath of our application that is ripe for regressions
and bugs.
 
As you might imagine then, our test code, should we reach 100% coverage, might easily outpace our actual functional code in terms of line count. 
This is a relatively common occurrence, and does introduce complexity to the code base. 

####Integration,Acceptance..or E2E tests

In our test suite we have omitted an entire class of tests completely. These tests are typically called *features* within the test suite itself. 
Essentially these types of tests attempt to mimic the flow of a user actually using the application. In a web setting, this means employing a 
piece of software(usually Selenium) that can trigger events on the browser automatically. 

These tests can be particularly powerful, and recently have become more popular, with some even advocating using them in place of traditional
unit tests. 

I would advise against this, and advocate for a more pragmatic approach. Depending on where a particular piece, or pieces, of code lie on the 
algorithmic complexity scale, it may be better served by either a unit, or and e2e test. Let's again take the example of our filter, seeing as how
it has a compound ternary statement, that represents a fair bit of algorithmic complexity. I would argue that it is better to unit test that piece of
code rather than run e2e tests in an attempt to verify it. 

Controller code, where we are examining the flow of one piece of data from one part of an application to another, with low
algorithmic complexity, is a good fit for e2e tests. 

e2e tests are often more coarse grained than unit tests, and it's easier for subtle bugs to slip by without being noticed. This underscores the importance of
having both kinds of tests in an application. 

####Regression Tests

When those inevitable failures and bugs do creep into the system, it's at this point that we want to write tests that exploit and capture that flaw. We do this
so that these tests can be run in the future to ensure that the particular bug does not re-enter the system in the future. 

These tests that were written as the result of finding a flaw in the system, with the goal of preventing it's re-entry, are called *regression tests*. 

Regression tests are an extremely important class of tests for a system, and they can come in the form of either a unit test, or an e2e test. 

---
 
Ultimately testing is an art, and there is, and cannot be, any formal proof that your code is bug-free. In fact, it's a near certainty that it's not. Tests
serve as a bulwark against unreliable software, but bear in mind that perfection cannot be achieved.  