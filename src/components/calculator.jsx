let result = 0;
function add(a,b){
    result = a+b;
    return result;
        
}
function sub(a,b){
    result = a-b;
    return result;
}

function mul(a,b){
    result = a*b;
    return result;
}
function div(a,b){
    result = a/b;
    result = result.toFixed(2)
    return result;
}

export default add;
export {sub,mul,div};