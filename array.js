const arr = [5,10,12,15,11,90,54,33,23,45]
function itrateArray(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
itrateArray(arr);

console.log("Array Reverse");

function reverseArray(arr){
    for(let i=arr.length-1; i>=0; i--){
        console.log(arr[i]);
    }
}
reverseArray(arr);