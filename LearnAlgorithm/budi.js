<!DOCTYPE html>
<html>
<body>

<p>Click the button to wait 3 seconds, then alert "Hello".</p>

<button onclick="myFunction()">Try it</button>

<script>
var myVar;

function myFunction() {
  myVar = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}
</script>

</body>
</html>
