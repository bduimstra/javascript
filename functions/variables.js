var fooGlobal = 'this is global';

var THIS_IS_A_CONSTANT = 'this should never change';

document.addEventListener('DOMContentLoaded', function() {
	var barLocal = 'this is not global';

	barGlobal = 'this is global too';
	fooGlobal = 'Can I change this?';

	//console.log(fooGlobal);
});

console.log(fooGlobal);

