// Anonymous function without any paramerters ...
let callbackFunc = function () {
    console.log('callback function');
}

// ... is equivalent to ...
let callbackFunc2 = () => {
    console.log('callback function2');
}


// Anonymous function with one parameter ...
let callbackFunc3 = function(param1) {
    console.log('callback function3', param1);
}

// ... is equivalent to ...
let callbackFunc4 = (param1) => {
    console.log('callback function4', param1);
}

// ... or ...
let callbackFunc5 = param1 => {
    console.log('callback function4', param1);
}


// Anonymous function with two or more parameters ...
let callbackFunc6 = function (param1, param2) {
    console.log('callback function5', param1, param2);
}

// ... is equivalent to ...
let callbackFunc7 = (param1, param2) => {
    console.log('callback function5', param1, param2);
}
