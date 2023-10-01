
function callback() {
    console.log("callback");
}

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function bottle () {
        console.log('named function');
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('anonymous function');
    }
}