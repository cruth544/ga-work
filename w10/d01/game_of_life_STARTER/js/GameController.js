angular
	.module('gameOfLife')
	.controller("GameController", ['$interval', GameController]);

function GameController($interval) {

	this.count = 48;

	this.gameBoard = [
				[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{status: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: true},
		{alive: true}, {alive: false}, {alive: false}, {alive: false}, {alive: true},
		{alive: true}, {alive: true}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: true}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: true}, {alive: false}, {alive: true}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: true}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: true}, {alive: false}, {alive: true}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: true}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: true}, {alive: false}, {alive: true}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: true},
		{alive: true}, {alive: false}, {alive: false}, {alive: false}, {alive: true},
		{alive: true}, {alive: true}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: true},
		{alive: true}, {alive: false}, {alive: false}, {alive: false}, {alive: true},
		{alive: true}, {alive: true}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: true}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: true}, {alive: false}, {alive: true}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: true}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: true}, {alive: false}, {alive: true}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: true}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: true}, {alive: false}, {alive: true}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: true},
		{alive: true}, {alive: false}, {alive: false}, {alive: false}, {alive: true},
		{alive: true}, {alive: true}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: true}, {alive: true}, {alive: false},
		{alive: true}, {alive: true}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: false},
		{alive: true}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: true}, {alive: true}, {alive: false}, {alive: true}, {alive: false},
		{alive: true}, {alive: false}, {alive: true}, {alive: true}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: true}, {alive: true}, {alive: true}, {alive: false}, {alive: false},
		{alive: false}, {alive: true}, {alive: true}, {alive: true}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false},
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		]
	];

	// the two first functions below functions below control the click events

	// this function controls the click of each individual cell
	// DO NOT EDIT THIS FUNCTION
	this.killOrRevive = function(row, cell) {
		if (this.gameBoard[row][cell].alive) {
			this.gameBoard[row][cell].alive = false;
			this.count --;
		} else {
			this.gameBoard[row][cell].alive = true;
			this.count ++;
		}
	};

	// this function controls the click of our "Start"/"Stop" button
	// DO NOT EDIT THIS FUNCTION
	this.toggleLifeCycle = function() {
		if (this.promise) {
			$interval.cancel(this.promise);
			this.promise = null;
		}
		else {
			// this line will run the function that we create below called "lifeCycle" on a loop (the cycle of life)
			this.promise = $interval(this.lifeCycle.bind(this), 400);
		}
	}






	// START CODING HERE

	// do not change the name of this function as it is being called above in toggleLifeCycle.

	this.lifeCycle = function() {

		/*
		Inside of this function, create the logic to check each cell inside of this.gameboard and determine which one of the following rules apply to it. Then also create the functionality to apply changes to the cell (make it live or die) based on the rule under which it falls.

		The Rules

		For a space that is 'populated':
		Each cell with one or no neighbors dies, as if by loneliness.
		Each cell with four or more neighbors dies, as if by overpopulation.
		Each cell with two or three neighbors survives.

		For a space that is 'empty' or 'unpopulated'
		Each cell with three neighbors becomes populated.

		*/
    var changes = [];
    var cultureCount = this.gameBoard.length * this.gameBoard.length
    for (var r = 0; r < this.gameBoard.length; r++){
      for (var c = 0; c < this.gameBoard[r].length; c++){

        if (this.gameBoard[r][c].alive){
          var neighborCount = countNeighbors(this.gameBoard, r, c);
          cultureCount++
          if (neighborCount < 2 || neighborCount > 3) {
            changes.push(this.gameBoard[r][c])
          }
        } else {
          var neighborCount = countNeighbors(this.gameBoard, r, c);
          if (neighborCount === 3) {
            changes.push(this.gameBoard[r][c])
          }
        }
      }
    }

    for (var index = 0; index < changes.length; index++){
      if (changes[index].alive) {
        this.count--
      } else {
        this.count++
      }
      changes[index].alive = !changes[index].alive
    }


  function countNeighbors(gameboard, row, column) {
    var neighbors = 0;
    for (var ri = -1; ri < 2; ri++){
      for (var cj = -1; cj < 2; cj++){
        if (ri === 0 && cj === 0) continue
        var totalRow = row + ri
        var totalCol = column + cj
        if (r + ri < 0) {
          totalRow = gameboard.length - 1
        } else if (r + ri > gameboard.length - 1) {
          totalRow = 0
        }
        if (c + cj < 0) {
          totalCol = gameboard.length - 1
        } else if(c + cj > gameboard.length - 1) {
          totalCol = 0
        }
        if (gameboard[totalRow][totalCol].alive){
          neighbors++;
        }
      }
    }
    return neighbors
  }


		/*

		** Don't forget to account for the board's edges. Make it so that when you reach the end of a row/column you continue back at the begining of that row/column. **

		GOOD LUCK!!!

		BONUS: Get this.count to correctly show the number of living cells after every life cycle

		*/

		} // end this.lifeCycle()
}
