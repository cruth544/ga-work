Note: This presentation is available [here](https://presentations.generalassemb.ly/e9571e16e19a8b0e9504).

![](http://www.cnydev.org/wp-content/uploads/2015/03/socketio2.png)

## Realtime with Socket.io

## Learning Objectives



- Add realtime communication between browser and server in a Node application

---

## Roadmap



- Intro to _Socket.IO_
- Our Sample App: **`realtime-circles`**
- Config Socket.IO on the Server & Client (browser)
- Displaying Circles in Realtime
- Clear the Display
- Deploy to Heroku
- Want More? Track Players!

---

### Intro to _Socket.IO_

- The HTTP protocol does not enable bidirectional realtime communication.
- Fortunately, HTML5 included a new protocol that does - the __websocket__ protocol.
- __Socket.IO__ is a JavaScript library that makes realtime bidirectional event-based communication easier than working with websockets directly.

---

#### Socket.IO - Basic Architecture

<br>

![](https://lh5.googleusercontent.com/unfpPe6OC4zzXxe89VXn0Sbmp5uQBifvTx6illIno-OofyFXm-PmMYXe5gGaokGLcu7VCJjB_koRspcneTHfjuMct9yhk_YiwX4XaLCY6O13vKzHGsQ0A8RkB_oYhzmrzFM)

- Clients can send a message to the server which in turn can push messages to all clients "listening" on the same _channel_.

---

### Our Sample App: `realtime-circles`

- Copy the realtime-circles starter code to your working directory.
- `> npm install`
- `nodemon` and browse to `localhost:3000`
- Clicking creates a circle of random size and color.
- Our goal is to make this a realtime multi-player circle-fest.
- Let's review the starter code...

---

### Review the Code for `realtime-circles`

- The first thing to note in our code is the fact that our Node `app.js` has been renamed to `server.js`. This is often done in MEAN Stack apps because the main AngularJS module is usually named `app.js` and it would be confusing to have two `app.js` files.
- Renaming our server code to `server.js` required us changing the very first line in the `www` file to:<br>`var app = require('../server'); // changed /app to /server`

---

### Review the Code for `realtime-circles`

- Examining our `server.js` will show that we removed much of the middleware since we are not going to be using cookies, parsing the body for posted data, etc.
- We only have one view - `index.ejs`. Take a look...
- You will see that we are loading our JS program file - `app.js`. Check it out...

---

## Setting up Socket.IO

<br>

#### Both the client and server<br>need to be configured with Socket.IO

---

#### Config the Server

- Install the Socket.IO Module

``` 
​```
> npm install --save socket.io
​```
```

- We're going to keep our Socket.IO code in a separate file. Create a file named `io.js` in our project's root folder.
- Socket.IO needs to mount to the `http` server, not the Express app. We will require our new `io.js` module in the `/bin/www` file:

``` 
​```js
var server = http.createServer(app);
```

​	

``` 
// load and attach socket.io to http server
var io = require('../io');
io.attach(server);
​```
```

---

#### Config the Server (cont.)

<br>

- With our `io.js` now loaded, let's put some test code in it:

``` 
​```js
var io = require('socket.io')();
```

​	

``` 
io.on('connection', function (socket) {
  console.log('Client connected to socket.io!');
```

  	});

​	

``` 
module.exports = io;
​```
```

- Time to move on to the client...

---

#### Config the Client (browser)

<br>

- In our `index.ejs` file, we will need to include a special script file that is __generated__ by the `socket.io` module on the server.<br><br>Be sure to put it before our `app.js`:

``` 
​```html
	...
	<script src="/socket.io/socket.io.js"></script>
	<script src="/javascripts/app.js"></script>
</body>
​```
```

---

#### Config the Client (cont.)

<br>

- The `socket.io.js` script exposes an `io` global function that we execute to obtain our connection to the server.
- We then assign our connection to a variable named `socket`.

``` 
​```js
document.addEventListener("DOMContentLoaded", function() { 
```

  	// get our connection to the socket.io server

  	var socket = io();

  	console.log(socket);

  	var circles = document.getElementById('circles');

​	

``` 
​```
```

---

#### Test the Configuration

<br>

- Browse to `localhost:3000` and check that:
  - The Socket object logged in the browser's console has a<br>`connected: true` property.
  - The server's terminal window logged out the message<br>"Client connected to socket.io!".

---

## Our Realtime Requirements

<br>

- We will code along to transform our app into a realtime<br>multi-player circle-fest that:
  - Displays circles created by all players in realtime. 
  - Clears all circles from all connected client's displays when the `clear` button is clicked (this will be your chance to practice).

---

## Displaying Circles in Realtime

- Code Logic - Server:
  1. Listen for an `add-circle` event from the clients.
  2. When the event is received, emit it (along with the data received) to all connected clients (including the one that sent the event to begin with).
- Code Logic - Client:
  1. Listen for an `add-circle` event from the server.
  2. When the event is received, it will contain an object with the properties necessary to pass to the existing `addCircle()` function.
  3. In the click handler, we will emit a message to the server with an object containing `initials`, `x`, `y`, `dia` and `rgba` properties.
- Note: The `add-circle` event is a custom event that we created. You can create as many different events that you wish.

---

### Displaying Circles - Server Code

- This code in `io.js` accomplishes our Code Logic for the server:

``` 
​```js
var io = require('socket.io')();

io.on('connection', function (socket) {
```

   		socket.on('add-circle', function (data) {

``` 
  		io.emit('add-circle', data);
```

   		});

``` 
});
​```
```

- When a client (`socket`) connects, we setting up a listener for that client with the `on` method.
- When a client sends us an `add-circle` event, we forward it to all clients using the server's (`io`) `emit` method.

---

### Displaying Circles - Client Code

<br>

- Listen to the server for an `add-circle` event:

``` 
​```js
var socket = io();	
```

  	// listen to the server for the `add-circle` event

  	socket.on('add-circle', function (data) {

   		console.log(data);

  	});

``` 
​```
```

- For now, we're simply going to log out the data received - baby steps :)

---

### Displaying Circles - Client Code

- Emit an `add-circle` event with the data when user clicks:

``` 
​```js
```

  	circles.addEventListener('click', function(evt) {

``` 
	socket.emit('add-circle', {
  		initials: initials,
  		x: evt.clientX,
  		y: evt.clientY,
  		dia: randomBetween(10,100),
  		rgba: getRandomRGBA()
	});
```

  	});

``` 
​```
```

- Let's browse and make sure our console is receiving the events.<br><br>Check it with two browsers!

---

### Displaying Circles - Client Code

- Next, let's refactor `addCircle()` so that we can just pass in the data object:

``` 
​```js
```

  	// was -> function addCircle(x, y, dia, rgba) {

  	function addCircle(data) {

``` 
	var el = document.createElement('div');
	el.style.left = data.x - Math.floor(data.dia / 2 + 0.5) + 'px';
	el.style.top = data.y - Math.floor(data.dia / 2 + 0.5) + 'px';
	el.style.width = el.style.height = data.dia + 'px';
	el.style.backgroundColor = data.rgba;
	el.style.fontSize = Math.floor(data.dia / 3) + 'px';
	el.style.color = 'white';
	el.style.textAlign = 'center';
	el.style.lineHeight = data.dia + 'px';
	el.innerHTML = data.initials;
	circles.appendChild(el);
```

  	}

``` 
​```
```

---

### Displaying Circles - Client Code

- All that's left is to call the `addCircle()` function from our `socket.on` listener:

``` 
​```js
```

  	// listen to the server for the `add-circle` event

  	socket.on('add-circle', function (data) {

   		// console.log(data);

   		addCircle(data);

  	});

``` 
​```
```

- Use two browsers with different initials and test drive that bad boy!

---

## Clear All Circles<br>Practice (10 mins)

<br>

- Partner up and make the `clear` button clear all connected user's displays instead of just yours.
- Hint: This will require another event in addition to the `add-circle` event.

---

## Deploy to Heroku

<br>

- **Set aside your fears and:**
  1. Create a local git repo: `> git init`
  2. Add and commit: `> git add -A` & `> git commit -m "Initial commit"`
  3. Make sure you are logged in to Heroku: `> heroku login`
  4. Create a Heroku deployment: `> heroku create`
  5. Deploy your repo to Heroku: `> git push heroku master`
  6. Ensure that at least one instance is running: `> heroku ps:scale web=1` 
  7. Once deployed, open the app: `> heroku open`

---

## Realtime Is Fun!

---

## Questions

- What method is used to send events from the server/client to the client/server?
- What method is used to set up a listener for an event?
- What are the names of the events available to us?

---

## Want More? Track Players!

<br>

- In the realtime realm, tracking connected users or players is know as tracking **presence**.
- It would be nice to know who's connected to our `realtime-circles` app, so let's do this!

---

### Track Players - Code Logic

<br>

- Code Logic - **Server**:
  1. When a client connects, set up a listener for a `register-player` event from that client. The client will send their initials as data with the event.
  2. When a client emits the `register-player` event, the server will:<br> (a) Add the player's initials as a key to a `players` object variable. We are going to use an object instead of an array because it will make it easier to both prevent duplicates and remove players when they disconnect.<br> (b) Then we will then emit an `update-player-list` event, along with the updated list of initials, as an array, to all clients.
  3. When a client disconnects, we will remove the key from `players` and again, emit the `update-player-list` event.

---

### Track Players - Code Logic

<br>

- Code Logic - **Client**:
  1. After the player has entered their initials, emit the `register-player` event, sending the initials as data.
  2. Listen for the `update-player-list` event and update the DOM by writing `<li>` tags (one for each player in the array) inside of the provided `<ul>`.

---

### Tracking Players - Server Code

<br>

- Define the `players` object to hold player's initials in `io.js`:

``` 
​```js
var io = require('socket.io')();
```

​	

``` 
// object to hold player's initials as keys
var players = {};
​```
```

---

### Tracking Players - Server Code

- Set up the listener for the `register-player` event in which we will take care of business:

``` 
​```js
io.on('connection', function (socket) {
```

​	

   		socket.on('register-player', function (data) {

``` 
  		// assigning true is arbitrary, we just need to create a key
  		players[data.initials] = true;
  		socket.initials = data.initials;
  		io.emit('update-player-list', Object.keys(players));
	});
	
	...
	
​```
```

- Notice we're taking advantage of the dynamic nature of JS by adding our own custom `initals` property onto the client `socket` object!

---

### Tracking Players - Server Code

- Set up the listener for when the player disconnects. Add this along with the other listeners:

``` 
​```js
io.on('connection', function (socket) {
```

​	

``` 
	// when the player disconnects, remove key & notify clients
	socket.on('disconnect', function (data) {
  		delete players[socket.initials];
  		io.emit('update-player-list', Object.keys(players));
	});
	
	...
	
​```
```

---

### Tracking Players - Client Code

<br>

- After the player has entered their initials,<br>emit the `register-player` event, sending the initials as data (`app.js`):

``` 
​```js
...
```

​	

  	while (initials.length < 2 || initials.length > 3) {

   		initials = prompt("Please enter your initials").toUpperCase();

``` 
	if (initials.length > 1 && initials.length < 4) {
		socket.emit('register-player', {initials: initials});
	}
```

  	}

``` 
	
...
	
​```
```

---

### Tracking Players - Client Code

<br>

- Let's cache the `players` `<ul>` element into a `var`:

``` 
​```js
...
```

​	

  	var circles = document.getElementById('circles');

  	

  	// players <ul> element in the footer

  	var players = document.getElementById('players');

``` 
	
...
​```
```

---

### Tracking Players - Client Code

- Add the listener for the `update-player-list` event:

``` 
​```js
...
```

​	

  	// listen to the server for when the player list has changed

  	socket.on('update-player-list', function (data) {

   		var playerList = '<li>' + data.join('</li><li>') + '</li>';

``` 
	players.innerHTML = playerList;
```

  	});

   	 	

``` 
...
​```
```

- Using the `join()` method to create a string from an array is very efficient!

---

### Tracking Players - Run It!

<br>

- To summarize:
  - When a player visits the page and enters their initials, the app informs the server by emitting the `register-player` event.
  - The server adds the player's initials to the `players` object as a key and notifies all connected clients by emitting the `update-player-list` event.
  - Clients will receive the `update-player-list` event, generate a nice list of `<li>` tags in a string, and blast that baby in the `<ul>`'s `innerHTML`.

--- 

## Questions?

---

## References

<br>

- [Socket.IO](http://socket.io/)
- [WebSockets Protocol](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)