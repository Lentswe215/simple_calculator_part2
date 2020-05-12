let Calculator = require("../src/simple_calculator_part2")
let calculator_instance = new Calculator()

describe("add", ()=> {

    it("should test if add() have been called", ()=> {
        spyOn(calculator_instance, "add")
        calculator_instance.add()
        expect(calculator_instance.add).toHaveBeenCalled()
    })

    it("should test if add() have been called", ()=> {
        spyOn(calculator_instance, "add")
        calculator_instance.add(1,2)
        expect(calculator_instance.add).toHaveBeenCalledWith(1,2)
    })

    it("should return 3", ()=>{

        expect(calculator_instance.add(1,2)).toBe(3)
    })

})

describe("multiply", ()=> {
    it("should test if multiply() have been called", ()=> {
        spyOn(calculator_instance, "multiply")
        calculator_instance.multiply()
        expect(calculator_instance.multiply).toHaveBeenCalled()
    })

    it("should test if multiply() have been called", ()=> {
        spyOn(calculator_instance, "multiply")
        calculator_instance.multiply(1,2)
        expect(calculator_instance.multiply).toHaveBeenCalledWith(1, 2)
    })
})

describe("last", ()=> {
    it("should return result with 'LAST' as parameter", () => {
        calculator_instance.add(1,2)
        calculator_instance.last()

        expect(calculator_instance.multiply("LAST", 5)).toBe(15)
        })

        
    })
    
    describe("set_slot", () => {
        it("should check if set_slot is called", () => {
            spyOn(calculator_instance, "set_slot")
            calculator_instance.set_slot(1)

            expect(calculator_instance.set_slot).toHaveBeenCalledWith(1)
        })
    })

    describe("get-slot", ()=> {

    beforeEach(function() {
        global.calculator2 = new Calculator()
    })

        it("should return get_slot(1) number", () => {
            calculator2.add(1,2)
            calculator2.set_slot(1)

            expect(calculator2.get_slot(1)).toBe(3)
        })

        it("should return SLOT_2 number", () => {
            calculator2.add(1,2)
            calculator2.set_slot(1)
            calculator2.add(10, 20)
            calculator2.set_slot(2)

            expect(calculator2.get_slot(2)).toBe(30)
        })
    })

  
    
    
        
  

   

    

        

    

       

        
        
       

        

      

        it("should return result with SLOT_1 as parameter", () => {
            calculator_instance.add(1,2)
            calculator_instance.set_slot(1)

            expect(calculator_instance.add("SLOT_1", 4)).toBe(7)
        })
  