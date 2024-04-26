const array = [4,8,9,3,45,654,36,77,11,800,214,1,25]

function bubble(array){
    const arr = array
    for(let i = 0; i < arr.length-1; i++){
        for(let j = 0; j < arr.length-1-i; j++){
            if(arr[j]> arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                
            }
        }
    }
    console.log(arr);
}

function selection(array){
    const arr = array

    console.log(arr.length);
    for(let i = 0; i < arr.length-1; i++) {
        let min = i
        for(let j = i; j < arr.length; j++){
            if(arr[min]>arr[j]){
                min = j
            }
        }
        [arr[min],arr[i]]=[arr[i],arr[min]]
    }
    console.log(arr);
}

function insertion(array){
    const arr = array
    const temp = []
    temp.push(arr[0],arr[1])
    for(let i=2; i<arr.length; i++){
        temp.push(arr[i])
        for(let j=i; j>0; j--){
            if(temp[j-1]>temp[j]){
                [temp[j], temp[j-1]] = [temp[j-1],temp[j]]
            }else{
                break;
            }
        }
    }
    console.log(temp);
}

// bubble(array)
// selection(array)
insertion(array)