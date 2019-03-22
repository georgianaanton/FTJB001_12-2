var promiseDemo = function(){
    var resolve = function(data){
        console.log(data);
    }
    var reject = function(err){
        console.log(err.message)
    }
    var promise = new Promise(function(resolve, reject){
        // do something once, async
        if(Math.random()>0.5){
            resolve([1,2,3])
        } else {
            reject(Error("Some error occurred"))
        }
    });
    
    promise
        .then(function(res){
            console.log("Finally res is here")
            console.log(res);
        })
        .catch(function(err){
            console.log(err)
        })
}