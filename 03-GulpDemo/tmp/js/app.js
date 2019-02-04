function getPrintouts(filename){
    // open a file
    // read a file
    // print the pages
    // close the file
}
getPrintouts("d://my work/javascript.js");
getPrintouts("e://office/junit.java");

// ------

function add(){
    console.log(5+3);
}

add();
// add(2,9);

function add(fn, sn){
    console.log(fn + sn);
}
add(2,9);

function add(fn, sn){
    return fn + sn;
}
add(2,9);


function addAll(){
    // console.log(arguments);
    var sum = 0;
    for(var i=0;i<arguments.length;i++){
        if(!isNaN(arguments[i])){
            // console.log(arguments[i]);
            // sum = sum+arguments[i];
            sum = add(sum, +arguments[i]);
        } else {
            // ignore
        }
    }
    return sum;
}
addAll(5,9,7,2,14);
addAll(5,9,7,2,'14');
addAll(5,9,7,2,'14', 'three');


// ------------------------
// functions without any name are known as Anonymous functions
// also called as function literals

var addAll = function(){
    // console.log(arguments);
    var sum = 0;
    for(var i=0;i<arguments.length;i++){
        if(!isNaN(arguments[i])){
            // console.log(arguments[i]);
            // sum = sum+arguments[i];
            sum = add(sum, +arguments[i]);
        } else {
            // ignore
        }
    }
    return sum;
}


// --------------------

// JavaScript Environment
// functions & vars
// var a = 3;

function show(){
    // var a = 2;
    console.log(a);
}

var a = 5;
console.log(a);

show();

// --

console.log(bb);
var bb = 5;
console.log(bb);

//--

function showName(name){
    console.log("Hello", name);
}

showName("Amresh");
//--


var showName2 = function(name){
    console.log("Hello", name);
}

showName2("Amresh");
//----


(function(a, b, c){
    console.log("initialized ", a);
    console.log("initialized ", b);
    console.log("initialized ", c);
})(1,2,3)