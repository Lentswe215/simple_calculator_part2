"use strict";
class Calculator {
  constructor() {
    this.resultArray = [];
    this.memory_slot = [];
  }
  add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      if(arguments[i] == "LAST"){
        sum += this.last()
      } else if(typeof arguments[i] === "string" && arguments[i].includes("SLOT_")) {
        let numSlot = arguments[i].match(/\d+/g)
        Number(numSlot)
        sum += this.get_slot(numSlot)
      } else
      sum += arguments[i];
    }
    this.resultArray.push(sum);
    return sum;
  }
  multiply() {
    let product = 1;
    for (let i = 0; i < arguments.length; i++) {
      if(arguments[i] == "LAST"){
        product *= this.last()
      } else if(typeof arguments[i] === "string" && arguments[i].includes("SLOT_")) {
        let numSlot = arguments[i].match(/\d+/g)
        Number(numSlot)
        product *= this.get_slot(numSlot)
      } else
      product *= arguments[i];
    }
    this.resultArray.push(product);
    return product;
  }
  last() {
    return this.resultArray[this.resultArray.length - 1];
  }
  set_slot(numSlot) {
   this.memory_slot.push(this.resultArray[numSlot - 1])
  }
  get_slot(numSlot) {
   return this.memory_slot[numSlot - 1]
  }
}
module.exports = Calculator;