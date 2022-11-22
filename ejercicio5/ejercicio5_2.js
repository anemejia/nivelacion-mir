function max(num) {
    var elmax=num[0];
    for(i=1;i<=num.length;i++){
        if(num[i]>elmax)
            elmax=num[i];
    }

    return elmax;
}
console.log(max([1,3,2]));
console.log(max([10,9,8,7,6,5,4]));
console.log(max([]));
