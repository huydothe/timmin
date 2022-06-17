function minarray(arr){
    let min=arr[0];
    for (i=0; i<arr.length; i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
}
let arr2=[7, 12, 6, 9, 20, 56, 89];
let min=minarray(arr2);
alert(min);