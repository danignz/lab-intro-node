class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    //if the array is empty we can add it, dont need check the order
    if (!this.length) {
      this.items.splice(0, 0, item);
      this.length = this.items.length;
      //if the array only have one value, check if insert the element at right or left
    } else if (this.length === 1) {
      //insert right
      if (this.items[0] <= item) {
        this.items.splice(1, 0, item);
        this.length = this.items.length;
        //insert left
      } else {
        this.items.splice(0, 0, item);
        this.length = this.items.length;
      }
      //if the array have more than one elements, iterate over each one it.
    } else {
      //if the new element its smaller than the first array element, the new one will be the first
      if (this.items[0] >= item) {
        this.items.splice(0, 0, item);
        this.length = this.items.length;
        //if the new element its bigger than the last array element, the new one will be the last
      } else if (this.items[this.items.length - 1] <= item) {
        this.items.splice(this.items.length, 0, item);
        this.length = this.items.length;
        //if the item have to be inserted in some middle position
      } else {
        let i = 0;
        let notInserted = true;
        while (i < this.length && notInserted) {
          if (this.items[i] <= item && this.items[i + 1] > item) {
            this.items.splice(i + 1, 0, item);
            this.length = this.items.length;
            notInserted = false;
          }
          i++;
        }
      }
    }
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
