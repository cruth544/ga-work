## Angular Testing
 
### Simple tests for a *notes* app

Using the very simple *app* folder we'll work to create some unit tests to put our code through its paces.
 
First let's install angular, and we'll install the *legacy version* just to constrain ourselves and pretend we're working
at an ultra conservative organization that is fearful of change, in other words, this is a realistic scenario.
 
```bash
#make sure you're in the app directory
$ npm install angular@1.2.29
``` 
You can go ahead and move the angular folder from inside the *node_modules* directory into the *js* directory if you'd like. 
It's not required, or if you do want to use *require('./angular')*, you can do that as well. Bottom line is we want our *index.html*
to be able to find the *angular.js* file, and we also want our test runner to find it later. 

The bottom of our *index.html* file should look like the following if you moved the angular directory: 

```html
</body>
<script src="js/angular/angular.min.js"></script>
<script src="js/app.js"></script>

</html>

```

For unit test we'll also have to install angular's mocking library, which we can also move to our *js* directory. 

```bash
$ npm install angular-mocks@1.2.29
```

In order to begin we'll need to install a unit testing framework(chai), and a test-runner(karma). 


```bash
# install karma globally 
$ sudo npm install -g karma-cli
```

Now, importantly, we'll need to install karma *within our project folder*. 

```bash
#within the angular-testing/app directory:
$ npm install karma

#install specific karma packages
$ npm install karma-jasmine karma-chrome-launcher

```

What we'll do next is create a configuration file by initializing karma

```bash

$ karma init

```

This will prompt you through a series of questions that will look like this:

```text
Which testing framework do you want to use ?
Press tab to list possible options. Enter to move to the next question.
> jasmine

Do you want to use Require.js ?
This will add Require.js plugin.
Press tab to list possible options. Enter to move to the next question.
> no

Do you want to capture any browsers automatically ?
Press tab to list possible options. Enter empty string to move to the next question.
> Chrome
> 

What is the location of your source and test files ?
You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
Enter empty string to move to the next question.
> js/*.js
> 

Should any of the files included by the previous patterns be excluded ?
You can use glob patterns, eg. "**/*.swp".
Enter empty string to move to the next question.
> 

Do you want Karma to watch all the files and run the tests on change ?
Press tab to list possible options.
> no


Config file generated at "/Users/protocol/Documents/wdi-dtla/week10/angular-testing/app/karma.conf.js".

```

Let's now take a look at the *karma.conf.js* file that was generated. We'll need to modify it so that it can find
our angular and angular-mocks files when it runs our test. 
 
> karma.conf.js
 
```javascript
config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'js/angular/angular.min.js',
      'js/angular-mocks/angular-mocks.js',
      'js/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


```

Note that we have added *'js/angular/angular.min.js','js/angular-mocks/angular-mocks.js'* to the list of files
to load in the browser. 
 


We'll now add in an appSpec.js file and run it just to check that everything is working so far. 

```bash
$ touch js/appSpec.js
```

Inside we'll add some code to set ourselves up for some basic angular tests. 

describe(' Controller: ListCtrl', function() {
    // Instantiate a new version of my module before each test
   beforeEach( module('notesApp'));
    var ctrl; // Before each unit test, instantiate a new instance // of the controller

    beforeEach( inject( function($controller) {
        ctrl = $controller(' ListCtrl');
    }));

    it('should have items available on load', function() {

       expect( ctrl.items).toEqual([
            {id: 1, label: 'First', done: true},
            {id: 2, label: 'Second', done: false}
       ]);
    });
  
});

Now, to run karma you *could* open two terminal windows, run *karma start* in one, and *karma run* in the other. But that wouldn't
be boss mode. Typically when you start a server in the terminal, that server process hijacks the terminal window, and you can't
do anything else with that terminal window, so you open another. Why not just use the same one?

```bash
$ karma start & 

output> [1] 11804
gs-MacBook-Pro:app protocol$ 13 10 2015 22:24:49.249:INFO [karma]: Karma v0.13.10 server started at http://localhost:9876/
13 10 2015 22:24:49.257:INFO [launcher]: Starting browser Chrome
13 10 2015 22:24:50.274:INFO [Chrome 46.0.2490 (Mac OS X 10.10.3)]: Connected on socket bnlSksKKJYcK1oMrAAAA with id 89950271

#You can now start the server in the same window, just type: 
karma run 
```
The **&** following *karma start* let's you start the process in the background. 11804 is a process id you can hang on to for use
later if you expressly want to kill the process. *Or*, if you're in boss mode again, you can use *grep* and *kill* together, with some
pipes: | 

just for fun: 

```bash
$  ps aux | grep -ie "karma start" | awk '{print $2}' | xargs kill -9 

#translation: grab all processes | filter out and return only those with 'karma' | grab the second
#column, which is the process id | use that process id and pass it to kill, which will kill the process 
```

This is the basic flavor of a test setup in Angular. Now we'll look at a more involved example [here]()










