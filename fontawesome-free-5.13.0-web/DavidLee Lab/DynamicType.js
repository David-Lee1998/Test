var age = 22;     //number
console.log(typeof age);

age = '真的是18歲嗎?'; //string
console.log(typeof age);

age = false;
console.log(typeof age);



function Add(x,y){
    if (typeof(x) !=='number' || typeof(y)!=='number') {
        return NaN;
        //你犯錯了
    }
    var z = x+y;
    return z;
}
console.log(Number(true))

//Add(3,5)
console.log(Add('3',5))






console.log('3' ==3);