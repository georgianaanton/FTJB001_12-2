var Calculator = require('./../modules/calculator');

describe("Calculator", function(){
    var cal = null;
    it("should add two numbers", function(){
        // var cal = new Calculator();

        expect(3).toBe(3);
        expect(12).toBe(cal.add(4, 8));
        expect(11).not.toBe(cal.add(4, 8));
    })

    it("should be instantiated", ()=>{
        // var cal = new Calculator();
        expect(cal).toBeDefined();
    })

    beforeEach(()=>{
        console.log("before each")
        cal = new Calculator();
    })
    beforeAll(()=>{
        console.log("beforeAll")
    })
    afterEach(()=>{
        console.log("afterEach")
    })
    afterAll(()=>{
        console.log("afterAll")
    })

    it("should not divide by zero", function(){
        expect(function(){
            cal.div(4, 0)
        }).toThrowError("Can not divide by zero")
    })
})
