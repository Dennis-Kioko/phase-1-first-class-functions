function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    return function something(){};
}

function returnsAnAnonymousFunction(){
    return function(){};
}