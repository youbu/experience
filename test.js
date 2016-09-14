var promise = window.Promise
		var ball1 = document.getElementById('ball1')
		var ball2 = document.getElementById('ball2')
		var ball3 = document.getElementById('ball3')
		function promiseAnimate(ball,dist) {
			return new Promise(function(resolve,reject){
				function _animate() {
					setTimeout(function() {
						var left = parseInt(ball.style.marginLeft,10)			
						if(left === dist){
							resolve();
						}else{ 
							if(left < dist){
								left ++;							
							}else{
								left --;
							}
							ball.style.marginLeft = left + 'px';
						 	_animate();
						}
					
					},13)
				}

				_animate();
			})
		}		
		promiseAnimate(ball1,100)
			.then(function () {
				return promiseAnimate(ball2,200)
			})
			.then(function () {
				return promiseAnimate(ball3,300)
			})
			.then(function () {
				return promiseAnimate(ball3,400)
			})
			.then(function () {
				return promiseAnimate(ball2,450)
			})
			.then(function () {
				return promiseAnimate(ball1,500)
			})
			
			.then(function () {
				return promiseAnimate(ball1,100)
			})
			.then(function () {
				return promiseAnimate(ball2,100)
			})
			.then(function () {
				return promiseAnimate(ball3,100)
			})