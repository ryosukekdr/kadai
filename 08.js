//底辺a、高さbの三角形の面積を求める関数triangle
function triangle(a, b) {
    let s = a*b/2;        
    return s;               
}

console.log(triangle(10, 20));



//底辺a、高さbの三角形の面積を求める無名関数
var triangle = function(a, b) {
    let s = a*b/2;        
    return s;
}

console.log(triangle(10, 20));