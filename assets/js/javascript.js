//start/reset game
$(document).ready(function() {
	//stats assigned to characters
	let att = 6;
	let newAttack = 6;
	let counterDmg = 0;
	let hp1 = 120;
	let hp2 = 180;
	let hp3 = 100;
	let hp4 = 150;

	charcterlist: [
		{
			name: 'Mega-man',
			visual: 'assets/images/mega1.png',
			hp: 120,
			att: 10,
			counterDmg: 20,
		},
		{
			name: 'Proto-Man',
			visual: 'assets/images/proto2',
			hp: 180,
			att: 10,
			counterDmg: 20,
		},
		{
			name: 'Roll',
			visual: 'assets/images/roll1.png',
			hp: 100,
			att: 10,
			counterDmg: 20,
		},
		{
			name: 'Dr. Wily',
			visual: 'assets/images/wily1.png',
			hp: 150,
			att: 10,
			counterDmg: 20,
		},
	];

	//user choose character
	$('.char1').on('click', function() {
		//userCharacter moves to user position (this doesnt work)
		$('attacker').append($('char1 >div'));
	});

	//all others become enemies

	//user chooses enemy to fight

	//chosen enemy moves to defender position

	//attack button function on click damages enemy removing their hp click (should do nothing before all characters are chosen), if user wins remove enemy and allow user to select new enemy, if user has defeated all enemies display "WIN!" counter attack function. Triggers after enemy takes damage, removing users hp before user can click attack again. If user hp drops to 0 or below display "YOU LOSE!" else attack button function plus base

	//target reset button to rest game back to default
});
