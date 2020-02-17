"use strict" 
let fs = require("fs")

class Calculator {
    constructor() {
        let LAST = fs.readFile("simple_calculator_results.txt", function (err, data) {})
    }
    add() {
        let sum = 0;

        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        fs.writeFile("simple_calculator_results.txt", sum, function (err) {

            if (err) {
                throw err;
            }
        })
        return sum;
    }

    multiply() {
        let product = 1;

        for (var i = 0; i < arguments.length; i++) {
            product *= arguments[i];
        }
        fs.writeFile("simple_calculator_results.txt", product, function (err) {
            if (err) {
                throw e
            }
        })
        return product;
    }

    last() {
        fs.readFile("simple_calculator_results.txt", function (err, data) {
            
            
            try {
                if(err){
                    throw err;
                }
                data = JSON.parse(data)
            } catch(err) {
                throw err
            }
            console.log(data)
        })
    }
}


let calculator1 = new Calculator()
let calculator2 = new Calculator()

console.log(calculator1.add(16,0,8))

calculator2.last()