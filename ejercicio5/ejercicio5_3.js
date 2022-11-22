function maxIndex(num) {
    var elmax=num[0];
    var inde=0;
    for(i=1;i<=num.length;i++){
        if(num[i]>elmax){
            elmax=num[i];
            inde=i;
        }
    }

    return inde;
}
console.log(maxIndex([1,3,2]));
console.log(maxIndex([10,9,8,7,6,5,4]));
console.log(maxIndex([]));

