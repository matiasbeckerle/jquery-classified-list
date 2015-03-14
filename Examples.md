# Example 1: All classes and simple implementation #

```
$(document).ready(function(){
	$('#example-1').classifiedList();
});
```

# Example 2: Only "odd" class #

```
$(document).ready(function(){
	$('#example-2').classifiedList({
		odd: true,
		even: false,
		level: false,
		item: false,
		first: false,
		last: false,
		hover: false
	});
});
```

# Example 3: Only "hover" class #

```
$(document).ready(function(){
	$('#example-3').classifiedList({
		odd: false,
		even: false,
		level: false,
		item: false,
		first: false,
		last: false,
		hover: true
	});
});
```

# Example 4: "onLoad" method callback #

```
$(document).ready(function(){
	$('#example-4').classifiedList({
		onLoad: function() {
			for(var i = 0; i < 5; i++) {
				$(this).fadeOut('slow');
				$(this).fadeIn('slow');
			}
		}
	});
});
```