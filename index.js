function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function substract(a,b){
    let subs = 0;
    for(i = 0; i < arr-length; i++ ){
        subs -= arr[i];
    }
    return subs;
}

function multiplication(arr){
    let result = 1;
    for(i = 0;  i < arr.length; i++){
        result *= arr[i];
    }
    return result;
}

function division(a,b){
    if(b !== 0){
        return a/b;
    }else{
        console.log("You can't divide by 0");
        return null;
    }
}

function squareRoot(a){
    if(a < 0){
        console.log("Cannot calculate the square root of a negative number");
        return null;
    }else if (a === 0){
        return 0;
    }
    return Math.sqrt(a);
}

function power(a, n){
    return a ** n;
}



