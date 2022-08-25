// Basically, Square should work where Reactangle works.
// That obviously doesn't mean Rectangle should work where Square works.
// So if we create a Square instance sq, calling sq.setLength (which is defined by Parent class) should not affect any of square behavior.

// So in absence of overridden setWidth and setLength methods, the principle is violated because
// sq.setLength sets only length of sq to provided value which then might be different from width,
// causing it not be a square anymore.',
class Rectangle {
  protected width;
  protected length;
  constructor(width: number, length: number) {
    this.width = width;
    this.length = length;
  }
  get area() {
    return this.length * this.width;
  }

  setWidth(value: number) {
    this.width = value;
  }

  setLength(value: number) {
    this.length = value;
  }
}

class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }
  setSide(value: number) {
    this.width = value;
    this.length = value;
  }
}

const sq = new Square(30);
console.log('Area of square::', sq.area); // Prints 900: Correct
sq.setLength(40); // We try to use parent method i.e. substitue parent method by child

// Following prints 1200 which is incorrect, we are expecting 1600
console.log('new Area of square::', sq.area);
