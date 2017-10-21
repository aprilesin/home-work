var dog = {
	color: 'black',
	lenght: 1,
	weight: 10,
	paws: 4,
	jaws:{
		teeth: 42
	},
	getVoice: function(){
		return 'gavgav';
	}
};

dog.lenght = 2;
console.log(dog);
console.log(dog.lenght);
console.log(dog.getVoice());

console.log(dog.jaws.teeth);
dog.jaws.teeth = 50;
console.log(dog.jaws.teeth);
console.log(dog.color.toUpperCase());
console.log(typeof(dog.color));