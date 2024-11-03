const x = 8,
      y = 4;

/*
    LEGENDA:
        && = AND
        || = OR
        ! = NOT
*/


// && AND
console.log(x === 8 && x < 9); //true && true
console.log(x === 8 && x === 9); //true && false
console.log(x === 8 && x < 10 && x < 20); //true && true && true
console.log(x === 8 && x < 10 && x != 8); //true && true && false
console.log(x != 8 && x === 8 && x < 10); //false && true && true


// ||
console.log(x === 8 || x < 9); //true || true
console.log(x === 8 || x === 9); //true || false
console.log(x === 9 || x === 8); //false || true
console.log(x === 8 || x < 10 || x != 8); //true || true || false
console.log(x != 8 || x === 9 || x < 7); //false || false || false

//! NOT
console.log(!x === 8);
console.log(!x > 7);