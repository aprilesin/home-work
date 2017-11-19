function People() {
 this.firstName = 'Vadim';
 this.lastName = 'Lesin';
 this.age = 21;
 this.setName = function(value) {
  this.firstName = value;
 };
}

function Human1(){
    this.__proto__ = new People();
    this.firstName = 'Vadim';
    this.getAgePeople = this.age;
    this.getLastNamePeople = this.lastName;
}
var myHuman1 = new Human1();
console.log(Human1);
console.log(myHuman1);

var myPeople = new People();
console.log(myPeople.firstName);
myPeople.setName = 'Ivan';
console.log(myPeople.firstName);
