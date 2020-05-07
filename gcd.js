//greatest common factor
function modulo(a, b) {
    if (a == 0) { console.log(0); }
    else {
        if (b == 0) { console.log(0); }
        else {
            while (a % b != 0) {
                let r = a % b;
                a = b;
                b = r;
            }
            console.log(`gcd is: ${b}`);
        }
    }
    return b
}
module.exports = modulo;
