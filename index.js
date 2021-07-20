function receivesAFunction(func) {
    return func()
}


function returnsANamedFunction() {
    return function named(name) {
        return name
    }    
}

function returnsAnAnonymousFunction() {
    return function(){}
}