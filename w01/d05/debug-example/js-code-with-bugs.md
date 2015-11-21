## Fix the bugs in the code below.

> What's wrong with this code?

```javascript
function count() {

  for (count = 0; counter < 10; counter++)
    console.log("Happy happy");
}

count();

```


> Explain why this code is probably doing something unintended

```javascript
var a = 3;

function foo() {
    var a = 2
    console.log(a);
}

if(true)
{
    var a = 1;
    console.log(a)
}

foo();
console.log(a)

```

> What's wrong with this code

```javascript
var a = 1;
bar b= '1';

function(a,b){

    if (a == b){

       console.log("the two parameters are the same")
    }

}

```

> Is there anything wrong with this code?

```
function concat(a, b) {
    return a + b
}

concat("hello");
```

> A problem with a Constructor Function

```javascript

//function used to create a person
function Person(name) { this.name = name; }

var ferdinand = Person("Ferdinand");

console.log(ferdinand.name);

```

> Testing that our code is working as expected. Can you test some of the bad code from above to ensure it's
working correctly?

```javascript

function Square(x,y){
  this.x= x;
  this.y = y;

}

function testVector() {
  var p1 = new Square(10, 10);

  if (p1.x !== 10) return "fail: x property";
  if (p1.y !== 10) return "fail: y property";
  return "everything ok";
}
console.log(testVector());

```
