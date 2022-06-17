function minarray(arr){
    let min=arr[0];
    for (i=0;i<arr.length;i++){
        if (min>arr[i]){
            min=arr[i]
        }
    }
    return min;
}
let arr1=[3, 5, 1, 8, -3, 7, 8];
let min = minarray(arr1);
alert (min);