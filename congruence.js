const modulo = require('./gcd')

function congruence(a,c,m) {
    let x = [];
    const gcd = modulo(m, a)  
    console.log(gcd);
    if ((c%gcd) == 0) {
        return 'there a solution'
    }
    else {
        return 'No solution'
    }
}
console.log(congruence(4183,5781,15087))