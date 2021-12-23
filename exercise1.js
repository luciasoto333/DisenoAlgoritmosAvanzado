function big(arr){
    var ini = arr[0];
    for(var i=0; i<arr.length; i++){
    var cadena = arr[i];
    //console.log(cadena);
    if(cadena >= ini ){
    ini = cadena;
    }
    }
    console.log(ini);
    }
    big([3, 5, 7, 1, 6]);