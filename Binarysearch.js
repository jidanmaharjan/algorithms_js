const values = [0,4,8,12,45,88,90,110,145,360,547,685,745,985]
let iteration = 0
let recursiveiteration = 0
const binary = (find, arr)=>{
    
    let lower = 0 
    let upper = arr.length - 1
    while(lower <= upper){
        iteration ++
        let mid = Math.floor(( upper + lower ) /2)
        if(arr[mid] === find){
            return mid
        }
        if(find < arr[mid]){
            upper = mid -1
        }else{
            lower = mid +1
        }
        
        
    }
    return false
    
}

const search = (find, arr, lower, upper) =>{
    recursiveiteration ++
    if(lower > upper){
        return false
    }
    let mid = Math.floor((lower + upper)/2)
    if(find === arr[mid]){
        return mid
    }
    if(find < arr[mid]){
        return search(find, arr, lower,mid-1)
    }
    if(find > arr[mid]){
        return search(find, arr, mid+1,upper)
    }

    
}

const binaryrecursive = (find, arr) =>{
    return search(find, arr, 0, arr.length -1)
}

const result = binary(145, values)
const recursiveresult = binaryrecursive(145, values)
console.log(result ? 'Value found at index '+ result : 'Nope Bruh')
console.log(recursiveresult ? 'Value found at index '+ recursiveresult : 'Nope Bruh')
console.log('Number of iterations ' +iteration);
console.log('Number of recursive iterations ' +recursiveiteration);