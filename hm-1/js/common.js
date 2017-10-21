var dog = {
	color: 'black',
	length: 1,
	weight: 10,
	paws: 4,
	jaws:{
		teeth: 42
	},
	getVoice: function(){
		console.log('gavgav')
		return cat;
	}
};
var cat = {
	color: 'ginger',
	length:  0.5
};

dog.length = 2;
console.log(dog);
console.log(dog.length);
console.log(dog.getVoice());

console.log(dog.jaws.teeth);
dog.jaws.teeth = 50;
console.log(dog.jaws.teeth);
console.log(dog.color.toUpperCase());
console.log(typeof(dog.color));

console.log(cat.color);
console.log(cat.length);

console.log(dog.getVoice());