function minarray(arr){
    let min=arr[0];
    for(i=0; i<arr.length; i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }return min;
}
let arr3= [];
let min=minarray(arr3);
alert(min);