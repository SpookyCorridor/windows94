$(document).ready(function() {
    
	function init()
	{
		// getting both canvases + drawing contexts
		var canvas_one = document.getElementById( 'canvas-one' );
		var ctx_1 = canvas_one.getContext( '2d' );
		var imgObj = new Image(); 
		imgObj.src = '/images/header.jpg'; 

		// storing canvas dimensions
		var canvas_width = canvas_one.clientWidth;
		var canvas_height = canvas_one.clientHeight;
		// draw a white background (transparent pixels are converted to black after glitching)
		ctx_1.fillStyle = '#000000';
		ctx_1.fillRect( 0, 0, canvas_width, canvas_height );
		// draw some random stuff on canvas one so we have something to glitch
		 imgObj.onload = function() {
   			ctx_1.drawImage(imgObj, 0, 0);
   			var image_data_1 = ctx_1.getImageData( 0, 0, canvas_width, canvas_height );
		// glitch the image data (passing drawImageDataInCanvasTwo as a callback function)
			var parameters = { amount: 50, seed: 20, iterations: 5, quality: Math.floor(Math.random() * 50 + 1) };
		
			
		
			

			glitch( image_data_1, parameters, drawImageDataInCanvasTwo );
		};
				// getting the image data from canvas one
				// https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D#getImageData()
		
		function drawImageDataInCanvasTwo( image_data )
		{
			// put the glitched image data on canvas two.
			// https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D#putImageData()
			ctx_1.putImageData( image_data, 0, 0 );
			writeLogo(); 
		}
		// http://stackoverflow.com/a/1484514/229189

		function writeLogo() { //chain after glitch to stay on top
			ctx_1.font="50px Verdana";
			// Create gradient
			var gradient=ctx_1.createLinearGradient(0,0,canvas_one.width,0);
			gradient.addColorStop("0","magenta");
			gradient.addColorStop("0.5","blue");
			gradient.addColorStop("1.0","red");
			// Fill with gradient
			ctx_1.fillStyle=gradient;
			ctx_1.fillText("Windows 94",10,50);
		}
		
	}
	init();




});

