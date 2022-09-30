class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  show() {
    return this.data
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
      this.data[index].push([key, value])

    } else if (this.data[index].some(el => el[0] === key && el[1] === value)) {
      return
    }
    else if (this.data[index].some(el => el[0] === key && el[1] !== value)) {
      for (let i = 0; i < this.data[index].length; i++) {
        if (this.data[index][i][0] === key) {
          this.data[index][i][1] = value;
        }
      }
    }
    else {
      this.data[index].push([key, value])
    }
  }

  get(key) {
    return this.data.flat(1).filter(item => item[0] === key).map(result => result[1])
  }

  keys() {
    return this.data.flat(1).map(el => el[0])
  }

  values() {
    return this.data.flat(1).map(el => el[1])
  }


  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000)
myHashTable.set('grapes', 10002)
myHashTable.set('oranges', 5)

console.log(myHashTable._hash('grapes'))

console.log(myHashTable.get('grapes'))
myHashTable.set('apples', 9)
console.log(myHashTable.get('apples'))
console.log(myHashTable.keys())
console.log(myHashTable.values())

console.log(myHashTable.show())


