class MyArray {
  constructor() {
    this.length = 0,
      this.data = {}
  }
  getArray() {
    return Object.values(this.data)
  }
  push(item) {
    this.data[this.length] = item;
    this.length++
  }
  getLength() {
    return this.length
  }
  pull() {
    delete this.data[this.length - 1];
    this.length--
  }
  insert(index, item) {
    for (let i = this.length - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i]
    }
    this.data[index] = item;
    this.length++
  }
}

const arrayObject = new MyArray;
arrayObject.push(1);
arrayObject.push(2);
arrayObject.push(3);
arrayObject.push(4);

// arrayObject.pull()
arrayObject.insert(1, 'inserted')

const length = arrayObject.getLength()
const array = arrayObject.getArray()

console.log({ arrayObject, array, length })