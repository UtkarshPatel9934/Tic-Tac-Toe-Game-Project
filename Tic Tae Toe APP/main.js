"use strict";
/*
	WEB 230 Winter 2021
	Assignment 6a
	{your name here}

	Student Name: Utkarsh Patel
	Student Number: 0785541
	Program Name: Assignment 6
	Date Created: 19 Nov 2021
*/

// 1
let playerX = document.querySelector('#x');
let playerO = document.querySelector('#o');

// 3
let selectAllTd = document.querySelectorAll('td');
selectAllTd.forEach(e => e.addEventListener('click', eventHandler));

// 2
function eventHandler(e){

	// 4
	let selectCurrplayerID = document.querySelector(".current-player").id;
	console.log(selectCurrplayerID);


		// 8
		if(e.target.classList == "x")
		{
			e.target.classList.add('');
		}
		else if(e.target.classList == "o")
		{
			e.target.classList.add('');
		}


		// 6
		if(playerO.classList == "current-player")
		{
			e.target.classList = "o";
		}
		else if(playerX.classList == "current-player")
		{
			e.target.classList = "x";
		}

		// 5
	playerX.classList.toggle("current-player"); // toogle the classes when click on the x
	playerO.classList.toggle("current-player"); // toogle the classes when click on the o

	let saveSelectCurrplayerID = selectCurrplayerID;
	let saveSelectAllTd = document.querySelectorAll('td');

	// 9
	// console.log(checkWin(saveSelectCurrplayerID, saveSelectAllTd));
	checkWin(saveSelectCurrplayerID, saveSelectAllTd);
}

// 7
document.querySelector('button').addEventListener('click', function(){
	selectAllTd.forEach(function(clear){
	    clear.classList.remove('x');
	    clear.classList.remove('o');
	    // 11
	    clear.style.backgroundColor = "white";
	});
});
