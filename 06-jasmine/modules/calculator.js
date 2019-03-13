class Calculator{
    add(a, b){
        return a + b;
    }
    div(a, b){
        if(b == 0){
            throw new Error("Can not divide by zero")
        }
        return a / b;
    }
    mul(a, b){
        return a * b;
    }
}

module.exports = Calculator;