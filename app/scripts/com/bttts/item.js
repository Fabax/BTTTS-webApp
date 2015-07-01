/*global window, $*/

function Item (id, levelId) {
	this.id = id;
	this.x = 0;
	this.y = 0;

	this.el = '<div class="item item_' + id +'"><img src="images/home/items/level' + levelId + '/0.png" alt="item_' + 0 +'"/></div>';

	this.setPos = function(x, y) {
		console.log('setPos(' + x + ', ' + y + ')');

		this.x = x;
		this.y = y;

		console.log($('.item_' + this.id));

		$('.item_' + this.id).css({
			'left' : x + 'px',
			'top' : y + 'px'
		});
	};
}