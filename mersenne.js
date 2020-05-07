//mersenne prime number algorithm and perfect numer
//mersenne prime mnumber,this function will print out specified list of prime number
function prime(x) {
    let array = [];
    let pri = 2;
    for (let i = 0; i < x; i++){
        pri = (2 ** pri) - 1;
        array.push(pri)
    }
   array.forEach(element => {
      console.log(element) 
   });
}

console.log(10)