
describe("Calculator", ()=> {

    beforeEach(function() {

        global.Calculator = require("../src/simple_calculator_part2")
        global.calculator1 = new Calculator()
    })
    it("should test if add() have been called", ()=> {
        spyOn(calculator1, "add")

        calculator1.add()

        expect(calculator1.add).toHaveBeenCalled()
    })

    it("should test if multiply() have been called", ()=> {

        spyOn(calculator1, "multiply")

        calculator1.multiply()

        expect(calculator1.multiply).toHaveBeenCalled()
    })

    it("should test if add() have been called", ()=> {
        spyOn(calculator1, "add")

        calculator1.add()

        expect(calculator1.add).toHaveBeenCalledTimes(1)
    })

        it("should test if multiply() have been called", ()=> {

            spyOn(calculator1, "multiply")
    
            calculator1.multiply()
    
            expect(calculator1.multiply).toHaveBeenCalledTimes(1)
    })

    it("should test if add() have been called", ()=> {
        spyOn(calculator1, "add")

        calculator1.add(1,2)

        expect(calculator1.add).toHaveBeenCalledWith(1,2)
    })

        it("should test if multiply() have been called", ()=> {

            spyOn(calculator1, "multiply")
    
            calculator1.multiply(1,3)
    
            expect(calculator1.multiply).toHaveBeenCalledWith(1,3)
        })


        it("should return 3", ()=>{

            expect(calculator1.add(1,2)).toBe(3)
        })

        it("should return result with 'LAST' as parameter", () => {

            calculator1.add(1,2)
            calculator1.last()

            expect(calculator1.multiply("LAST", 5)).toBe(15)
        })

        it("should check if set_slot is called", () => {

            spyOn(calculator1, "set_slot")

            calculator1.set_slot(1)

            expect(calculator1.set_slot).toHaveBeenCalledWith(1)
        })

        it("should return get_slot(1) number", () => {

            calculator1.add(1,2)
            calculator1.set_slot(1)

            expect(calculator1.get_slot(1)).toBe(3)
        })

        it("should return get_slot(2) number", () => {

            calculator1.add(1,2)
            calculator1.set_slot(1)
            calculator1.add(10, 20)
            calculator1.set_slot(2)

            expect(calculator1.get_slot(2)).toBe(30)
        })

        it("should return result with SLOT_1 as parameter", () => {
            calculator1.add(1,2)
            calculator1.set_slot(1)

            expect(calculator1.add("SLOT_1", 4)).toBe(7)
        })
    })
