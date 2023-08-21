var a = [1,2,3];
let i1 = Math.floor(Math.random() * 3);
console.log(i1);


try {
    console.log(a[i]); //a[i1]だとtry成功することを確認済み
} catch (e) {
    console.log(e);
}