## LearnDOM Notes by Upi

First thing first, for easy access we need to install node library called `live-server`.

To do this, enter command below into your terminal:
```bash
npm install -g live-server
```
Move into your project directory and enter command below:
```bash
live-server
```

### Javascript Document Selector

We can manipulate any DOM using javascript selector

#### Class Selector

We can manipulate DOM using its class, for example:
```javascript
const classSelector = document.getElementsByClass('classname')
```

#### Id Selector

We can manipulate DOM using its id, for example:
```javascript
const idSelector = document.getElementById('idname')
```

#### Query Selector

There is also a query selector if we want to select DOM by its tag, for example:
```javascript
const querySelector = document.querySelector('h1')
```
We can also query all tag (if any), for example:
```javascript
const querySelectorAll = document.querySelectorAll('h1')
```

### Javascript Event Listener

After we referencing a variable into a DOM, we can create a listener to do something when specific event triggered, for example:

After button clicked
```javascript
const button = document.getElementById('button-id')

button.onclick = ()=> {
    console.log('Button clicked')
}
```