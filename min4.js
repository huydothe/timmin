function minarray(arr){
    let min=arr[0];
    for(i=0; i<arr.length; i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }return min;
}
let arr4= [0, 0, 0, 0, 0, 0];
let min= minarray(arr4);
alert(min);