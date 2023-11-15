let a =100;
document.write("so a la " + a +"<br>");
document.write(`so a la ${a} <br>`);
document.write(`so a la a`);

// // in ra man hinh 5 so chan bat dau tu start
// let start = + prompt("moi ban nhap vao so bat dau");
// for (let i = start; i < (start+10); i++) {
//     if (i%2==0){
//         document.write(`${i}  <br>`)
//     }
// }
// // in ra man hinh 15 so chan bat dau tu start
// let start = + prompt("moi ban nhap vao so bat dau");
// let count =0;
// for (let i = start; i < (start+30); i++) {
//     if (i%2==0){
//         document.write(`${i}  <br>`);
//         count++;
//     }
// }

// lap den so chan tren la bao nhieu
// lap voi so lan chua biet trc
let count =0;
let start = +prompt("moi ban nhap so bat dau");
let number = + prompt("moi ban nhap so luong phan tu");
let i = start;
while (count<number){
    if (checkPrime(i)){
        document.write(`${i} <br>`)
        count++
    }
    i++;
}

function checkPrime(n) {
    let isPrime = true;
    if (n<2){
        isPrime=false;
    }
    else {
        if (n>3){
            for (let i = 2; i < n; i++) {
                if (n%i==0){
                    isPrime = false;
                    break;
                }
            }
        }
    }
    return isPrime;
}
// let n = +prompt("Moi ban nhap vao so can xet");
// // thong bao ket qua
// if (checkPrime(n)){
//     alert(`${n} la snt`)
// }
// else {
//     alert(`${n} khong la so nguyen to`)
// }
