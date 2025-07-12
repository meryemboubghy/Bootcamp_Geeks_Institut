// 1 => false
// 2 :
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5

// 1 :
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}
// 2 :
class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound(son) {
    return ` sound  ${son} :I'am a ${this.type} my name is ${this.name} and my color is ${this.color} `;
  }
}
const farmerCow = new Mammal("oscar", "cat", "orange");
console.log(farmerCow.sound("Moooo "));
