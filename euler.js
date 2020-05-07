function factor(n) {
    let fct = [];
    let fact=[]
    let b = 2
    while (n !== 1) {
        if (n % b == 0) {
            n = Math.floor(n / b);
            fct.push(b)
            
        }else{b++}
    }
var map = fct.reduce(function (prev, cur) {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});
    return map
} 
function phi(obj) {
    
}
/*
if (fct.length == 0) {
                fct.push({pr:b,count:1});
            }
            else {
                for (i = 0; i < fct.length; i++){
                    if (fct[i].pr == b) {
                        fct[i].count++;
                    }
                    else {
                        fct.push({})
                    }
                }
            }
*/
function gcd(a, b) {
  if (a == 0) return b;
  return gcd(b % a, a);
}

// A simple method to evaluate
// Euler Totient Function
function phi(n) {
  let result = 1;
  for (let i = 2; i < n; i++) {
    if (gcd(i, n) == 1) {
      result++;
    }
  }
  return result;
}
//console.log(phi(1764))
console.log(gcd(8, 12));