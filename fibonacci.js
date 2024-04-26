function fibonacci(number){
    let a= 0
    let b = 1
    let array=[]
    for (let i=0; i<number; i++){
        array.push(a)
        const temp = a
        a=b
        b=temp + b
        // [a , b ] = [b, a+b]
    }
    return array
}

console.log(...fibonacci(20))
