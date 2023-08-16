let a = [];

for (let i = 0; i < 100; i++) {
    a[i] = i+1;    
}
console.log(a);  //念のため表示して配列aを確認


let b3 = a.filter(e => e % 3 == 0);
console.log(b3);


let b5 = a.filter(e => e % 5 == 0);
console.log(b5);