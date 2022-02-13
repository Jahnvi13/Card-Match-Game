const cards = document.querySelectorAll(".card");
console.log(cards);

for (var i=0;i<cards.length;i++){
	cards[i].addEventListener('click',myfunc);
}

function myfunc(){
	// console.log('entered');
	this.classList.toggle('flipped');
	const flippedCards = document.querySelectorAll(".flipped");
	if(flippedCards.length==2){
		
		var fb=flippedCards[0].children;
		var fb2=flippedCards[1].children;

		var id=fb[0].id.substring(1);
		var id2=fb2[0].id.substring(1);

		setTimeout(()=>{
			if(parseInt(id)==parseInt(id2)+6 || parseInt(id2)==parseInt(id)+6){
				console.log('yahoo!!');
				for (var i=0;i<flippedCards.length;i++){
					flippedCards[i].classList.add('flipped-perm');
				}
				
			}
			for (var i=0;i<flippedCards.length;i++){
				flippedCards[i].classList.toggle('flipped');
			}
			const perms = document.querySelectorAll(".flipped-perm");
			if(perms.length==12){
				alert('you won!!!');
			}
		},500);
		
		
	}
}