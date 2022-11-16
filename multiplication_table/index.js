for (var i = 1; i <= 9; i++) {
    var result = "";
    for (var j = 1; j <= i; j++) {
        result += i + "*" + j + "=" + i*j + " ";
    }
    console.log(result);
}