function receivesAFunction(spy){
    spy();
    return `doesn't matter what this function returns, so long  as it calls the callback function`;
}

function returnsANamedFunction(){
    return function aNamedFunction() { 
        return function anotherNamedFunction() {};
    };
}
function returnsAnAnonymousFunction(){
    return function(){};
}