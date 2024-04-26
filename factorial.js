function factorial(n){
    let fac =1
    if(n <0){
        return 'cannot be done'
    }
    if(n === 0){
        return 1
    }
    for(let i = 1; i <= n; i++) {
        fac *=i
    }
    return fac
}

console.log(factorial(5));