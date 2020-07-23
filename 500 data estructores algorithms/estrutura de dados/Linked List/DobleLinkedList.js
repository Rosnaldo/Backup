/* LinkedList */

class DoublyNode extends Node { // {1}
  constructor(element, next, prev) {
    super(element, next); // {2}
    this.prev = prev; // {3} NEW
  }
}

class DoublyLinkedList extends LinkedList { // {4}
  constructor(equalsFn = defaultEquals) {
    super(equalsFn); // {5}
    this.tail = undefined; // {6} NEW
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) { // {1} NEW
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head; // {2}
          current.prev = node; // {3} NEW
          this.head = node; // {4}
        }
      } else if (index === this.count) { // last item NEW
        current = this.tail; // {5}
        current.next = node; // {6}
        node.prev = current; // {7}
        this.tail = node; // {8}
      } else {
        const previous = this.getElementAt(index - 1); // {9}
        current = previous.next; // {10}
        node.next = current; // {11}
        previous.next = node; // {12}
        current.prev = node; // {13} NEW
        node.prev = previous; // {14} NEW
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next; // {1}
        // if there is only one item, then we update tail as well NEW
        if (this.count === 1) { // {2} 
          this.tail = undefined;
        } else {
          this.head.prev = undefined; // {3}
        }
      } else if (index === this.count - 1) { // last item NEW
        current = this.tail; // {4}
        this.tail = current.prev; // {5}
        this.tail.next = undefined; // {6}
      } else {
        current = this.getElementAt(index); // {7}
        const previous = current.prev; // {8}
        // link previous with current's next - skip it to remove
        previous.next = current.next; // {9}
        current.next.prev = previous; // {10} NEW
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
}  
