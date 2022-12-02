
class Person {
   constructor (name, age){
      this.name = name,
      this. age = age
   }
   compareAge(other){
           if (this.age>=other.age) {
            alert(`${this.name} старше, чем  ${other.name}`)
      }
     if (this.age<other.age){
      alert(`${this.name} младше, чем ${other.name}`)
     }
   }
   // this.age>=other.age? alert(`${this.name} старше, чем  ${other.name}`): 
   // this.age<other.age? alert(`${this.name} младше, чем ${other.name}`):
   // } 
   // как сделать так чтоб работало вместо if else используя тернарные операторы ?:
}
const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);

person1.compareAge(person2); // Максим младше, чем Светлана 
person2.compareAge(person3); // Светлана старше, чем Ирина 
person3.compareAge(person1); // Ирина младше, чем Максим

console.log(person1)
console.log(person2)
console.log(person3)



///////////////////////////////////////////
// взято за основу
// function Card(rank, suit) {
//    this.rank = rank;
//    this.suit = suit;
//    this.equals = function(other) {
//       return other.rank == this.rank && other.suit == this.suit;
//    };
//  }
 
//  var queenOfClubs = new Card(12, "C");
//  var kingOfSpades = new Card(13, "S");
 
//  queenOfClubs.equals(kingOfSpades); // => false
//  kingOfSpades.equals(new Card(13, "S")); // => true
 