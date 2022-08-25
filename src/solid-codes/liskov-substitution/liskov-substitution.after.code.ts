class ImprovedRectangle {
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

class ImprovedSquare extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }
  setSide(value: number) {
    this.width = value;
    this.length = value;
  }

  setWidth(value: number) {
    this.setSide(value);
  }

  setLength(value: number) {
    this.setSide(value);
  }
}

const sq2 = new ImprovedSquare(30);
console.log('Area of square::', sq2.area); // Prints 900: Correct
sq2.setLength(40);

// Now it prints 1600 which is correct
console.log('new Area of square::', sq2.area);
