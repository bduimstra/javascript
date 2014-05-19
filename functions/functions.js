function makeFunction() {
}

var makeOtherFunction = function() {
}

var NewClass = function() {
	this.foo = 'Hello World!';
	this.bar = 'Hello World Again!';
}

var copyClass = new NewClass;
console.log(copyClass.foo, copyClass.bar);

copyClass.foo = 'Hello World part deux';
console.log(copyClass.foo);

function doSomeCoolStuff(thing) {
	alert(thing);

	document.body.style.backgroundColor = 'red';

	document.body.innerHTML = '<p>Hello World!</p>';

	document.body.getElementsByTagName('p')[0].style.color = 'green';
}

document.addEventListener('DOMContentLoaded', function() {
	var curTime = new Date();
	console.log(curTime.getMilliseconds());
	console.log('This worked.');
});

window.onload = function() {
	var curTime = new Date();
	console.log(curTime.getMilliseconds());
	console.log('This happened after that other thing.');

	doSomeCoolStuff('consider yourself passed in');
};
