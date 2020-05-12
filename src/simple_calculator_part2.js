"use strict"

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
        let slotNumber = arguments[i].match(/\d+/g)
        Number(slotNumber)
        sum += this.get_slot(slotNumber)
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
        let slotNumber = arguments[i].match(/\d+/g)
        Number(slotNumber)
        product *= this.get_slot(slotNumber)
      } else
      product *= arguments[i];
    }
    this.resultArray.push(product);
    return product;
  }
  last() {
    return this.resultArray[this.resultArray.length - 1];
  }
  set_slot(slotNumber) {
    if(this.resultArray[slotNumber - 1] == null){
      throw "No Results"
    }
   this.memory_slot.splice(slotNumber - 1, 0 ,this.resultArray[slotNumber - 1])
  }
  get_slot(slotNumber) {
   return this.memory_slot[slotNumber - 1]
  }
}

module.exports = Calculator;