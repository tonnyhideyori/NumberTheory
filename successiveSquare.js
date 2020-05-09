//sucessive square is used to find  a^k%m
function successiveSquare(a, k, m) {
    let b = 1;
    while (k >= 1) {
        if (k % 2 == 1) {
            b = ((a*b) % m) ;
        }
        a = (a % m) ** 2
        k=Math.floor(k/2)
    }
    return b
}
//checking if number is prime by successive square algorithm
function numberIsComposite(n) {
    rand = Math.floor(Math.random(1) * 10);
    k = n - 1;
    if (successiveSquare(rand, k, n) == 1) {
        return 'prime'
    }
    else return 'not prime'
}
//console.log(successiveSquare(22929826, 3968039, 27040397));
//console.log( numberIsComposite(9991));
module.exports = { successiveSquare,numberIsComposite }