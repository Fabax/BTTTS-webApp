'use strict';

/**
 * @ngdoc function
 * @name btttsWebapp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the btttsWebappApp
 */
webapp.controller('HomeCtrl', ['$scope', function ($scope) {
	var _SLOPE_WIDTH = 2000,
		_SLOPE_HEIGHT = 1407,
		_MOVE_VALUE = 100,
		_ITEMS_NB_MIN = 20,
		_POSITION_INIT = 1120,

		_tickingItems = false,
		_tickingPositions = false,

		_levelIdCurrent = 0,
		_itemsIdCurrent = 0,
		_itemsNb = 0,
		_itemsList = [],

		_delta = 0,
		_slopeValue = Math.round(Math.sqrt(Math.pow(_SLOPE_WIDTH, 2) + Math.pow(_SLOPE_HEIGHT, 2))),
		_slopeWidthRatio = _SLOPE_WIDTH / _slopeValue,
		_slopeHeightRatio = _SLOPE_HEIGHT /_slopeValue ,
		_positionPreviousTemp = null,
		_positionPrevious = null,
		_positionCurrent = _POSITION_INIT,
		_slopePartCurrent = Math.floor(_positionCurrent / _slopeValue),

		_elMain = $('.landscape').find('.main'),
		_elItemsContainer = $(_elMain).find('.items_container'),
		_elItems = $(_elItemsContainer).find('.items'),
		_elItemsDisplayZone = $(_elItemsContainer).find('.items_display_zone');

	function requestTick() {
		if(!_tickingItems) {
			requestAnimationFrame(updateItems);
		}
		if(!_tickingPositions) {
			requestAnimationFrame(updatePositions);
		}

		_tickingItems = true;
		_tickingPositions = true;
	}

	function updateItems() {
		while(_itemsNb < _ITEMS_NB_MIN) {
			buildItem();
		}

		console.log(_itemsList);

		_tickingItems = false;
	}

	updateItems();

	function buildItem() {
		console.log('buildItem');

		var item = new Item(_itemsIdCurrent++, _levelIdCurrent);
		_elItems.append(item.el);

		var x = Math.round(Math.random()*$(_elItemsContainer).width()),
			y = Math.round(Math.random()*$(_elItemsContainer).height());

		item.setPos(x, y);
		_itemsList.push(item);

		_itemsNb = _itemsList.length;
	}

	function updatePositions() {
		var direction = (_delta < 0) ? -1 : 1;

		if(_positionPreviousTemp !== _positionCurrent) {
			_positionPreviousTemp = _positionCurrent;
		}

		_positionCurrent += direction * _MOVE_VALUE;

		if(_positionCurrent < 0) {
			_positionCurrent = 0;
		}

		if(_positionPreviousTemp === _positionCurrent) {
			_tickingPositions = false;
			return;
		} else {
			_positionPrevious = _positionPreviousTemp;
		}

		console.log(_positionCurrent);
		/*
		 var pos = _elMain.position();

		 console.log(pos);

		 var t = - _positionCurrent * _slopeHeightRatio;
		 var l = - _positionCurrent * _slopeWidthRatio;

		 console.log(t);
		 console.log(l);

		 _elMain.css({
		 'top' : t + 'px',
		 'left' : l + 'px'
		 });
		 */
		_tickingPositions = false;
	}

	function wheel(event){
		if (!event)
			event = window.event;
		if (event.wheelDelta) {
			_delta = event.wheelDelta/120;
		} else if (event.detail) {
			_delta = -event.detail/3;
		}
		if (_delta)
			requestTick();
		if (event.preventDefault)
			event.preventDefault();
		event.returnValue = false;
	}

	if (window.addEventListener) {
		window.addEventListener('DOMMouseScroll', wheel, false);
	}
	window.onmousewheel = document.onmousewheel = wheel;

}]);
