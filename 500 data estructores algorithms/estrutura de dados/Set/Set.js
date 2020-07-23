class Set {
  constructor() {
    this.items = {};
  }

  has(element){ 
    return element in this.items; 
  };

  values() {
    return Object.values(this.items);
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element; // {1}
      return true;
    }
    return false;
  } 

  delete(element) {
    if (this.has(element)) {
      delete this.items[element]; // {1}
      return true;
    }
    return false;
  }

  clear() {
    this.items = {}; // {2}
  }

  size() { 
    return Object.keys(this.items).length; // {1} 
  };

  union(otherSet) {
    const unionSet = new Set(); // {1}
    this.values().forEach(value => unionSet.add(value)); // {2}
    otherSet.values().forEach(value => unionSet.add(value)); // {3}
    return unionSet;
  }

  intersection(otherSet) { 
    const intersectionSet = new Set(); // {1}
   
    const values = this.values(); 
    for (let i = 0; i < values.length; i++) { // {2}
      if (otherSet.has(values[i])) { // {3} 
        intersectionSet.add(values[i]); // {4}
      } 
    } 
    return intersectionSet; 
  }

  difference(otherSet) {
    const differenceSet = new Set(); // {1} 
    this.values().forEach(value => { // {2} 
      if (!otherSet.has(value)) { // {3} 
        differenceSet.add(value); // {4} 
      }
    });
    return differenceSet;
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) { // {1}
      return false;
    }
    let isSubset = true; // {2}
    this.values().every(value => { // {3} 
      if (!otherSet.has(value)) { // {4}
        isSubset = false; // {5}
        return false;
      }
      return true; // {6}
    });
    return isSubset; // {7}
  }
  
} 

const set = new Set(); 
 
set.add(1); 
console.log(set.values()); // outputs [1] 
console.log(set.has(1));   // outputs true 
console.log(set.size());   // outputs 1 
 
set.add(2); 
console.log(set.values()); // outputs [1, 2] 
console.log(set.has(2));   // true 
console.log(set.size());   // 2 
 
set.delete(1); 
console.log(set.values()); // outputs [2] 
 
set.delete(2); 
console.log(set.values()); // outputs []
