module.exports = function reverse (n) {
    if(n<0) {
        n = -n;
    }
    var num = String(n);
    var r = "";
    for(var i=num.length-1;i>=0;i--) {
      r += Number(num[i])
    }
    return Number(r);
}
