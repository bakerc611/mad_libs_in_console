 alert("I'm working with JavaScript");
function mad_libs() {
	var animals = ['penguins', 'ape', 'bear'];
	var places = ['far far away', 'the river', 'home', 'ocean'];
	document.write('Long ago, a group of '+animals[0]+' were lost in a land '+places[0]+' . Trying diligently to find their way back '+places[2]+' , they decided they would find the nearest body of water. Soon, they ran into Kong, a wise '+ animals[1]+' with a fondness for nature. "Be wary penguins" he said as the waddled toward '+places[1]+' , "The mighty '+animals[2]+ ' is hungry and searching for food". Still, they pressed on, determined to find '+places[2]+' . Shortly thereafter, they found a beautiful river. Unfortunately, due to poor eyesight and their small stature, they thought they had finally reached the '+places[3]+' that would take them '+places[2]+' . They had instead, entered the hunting grounds of the mighty '+animals[2]+ ' . The End.');
}
mad_libs();