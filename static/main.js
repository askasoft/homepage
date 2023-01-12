$(function() {
	$('.p-totop').click(function() {
		$('html,body').animate({ scrollTop: 0 }, 'slow');
	});
	
	var $w = $(window);
	$w.scroll(function() {
		$('.p-totop')[$w.scrollTop() > $w.height() ? 'show' : 'hide']();
	});
});

function matrix_rain() {
	var c = document.getElementById("matrix");
	var ctx = c.getContext("2d");

	// making the canvas full of parent container
	c.height = c.parentNode.clientHeight;
	c.width = c.parentNode.clientWidth;

	//characters
	var chars = "abcdefghijklmnopqrstvuwxyz0123456789ABCDEFGHIJKLMNOPQRSTVUWXYZ`~!@#$%^&*()-=_+[]\\{}|,./<>?;':\"".split("");

	var font_size = 10;
	var columns = c.width/font_size; //number of columns for the rain
	//an array of drops - one per column
	var drops = [];
	//x below is the x coordinate
	//1 = y co-ordinate of the drop(same for every drop initially)
	for (var x = 0; x < columns; x++) {
		drops[x] = 1; 
	}

	//drawing the characters
	function draw() {
		//Black BG for the canvas
		//translucent BG to show trail
		ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
		ctx.fillRect(0, 0, c.width, c.height);
		
		ctx.fillStyle = "#0F0"; //green text
		ctx.font = font_size + "px arial";
		//looping over drops
		for (var i = 0; i < drops.length; i++) {
			//a random character to print
			var text = chars[Math.floor(Math.random()*chars.length)];
			//x = i*font_size, y = value of drops[i]*font_size
			ctx.fillText(text, i*font_size, drops[i]*font_size);
			
			//sending the drop back to the top randomly after it has crossed the screen
			//adding a randomness to the reset to make the drops scattered on the Y axis
			if (drops[i] * font_size > c.height && Math.random() > 0.975) {
				drops[i] = 0;
			}
			
			//incrementing Y coordinate
			drops[i]++;
		}
	}

	setInterval(draw, 100);
}
