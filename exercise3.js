function bigger(arr){
    big = [];
    for(var i=0; i<arr.length; i++){
    var max = arr[i][0];
    //console.log(max);
    for(var j=0; j<arr[i].length; j++){
    
    var actual = arr[i][j];
    if(actual >= max){
    max = actual;
    }
    }
    big.push(max);
    }
    var uno = big[0];
    var dos = big[1];
    //console.log(dos);
    if(uno>=dos){
    console.log(uno);
    } else {
    console.log(dos);
    }
    //console.log(big);
    }
    bigger([[9, 52, 7, 41, 16], [3, 45, 6, 9, 5]]);