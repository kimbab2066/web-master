const friend = {
  name: "kim",
  age: 20,
  showInfo() {
    return `이름${this.name}, 나이${this.age}`;
  },
};

class Person {
  constructor(name, height, weight, blood) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.blood = blood;
  }
  showInfo() {
    return `이름${this.name}, 키${this.weight}`;
  }
}

const p1 = new Person("kim", 180, 80, "O");
const p2 = new Person("park", 176, 77.7, "A");

console.log(p1.name, p1.weight, p1.showInfo());
console.log(p2.showInfo());
