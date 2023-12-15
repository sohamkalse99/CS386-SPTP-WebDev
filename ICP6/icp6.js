let strPrimeNums = '';
let isPrime = true;

for (let number = 2; number <= 100; number++) {
    for (let i = 2; i < number; i++) {
        // console.log(number+ ": "+i);
        if (number % i == 0) {
            isPrime = false;
        }
    }

    // If number is prime add it to string
    if (isPrime)
        strPrimeNums += number + ', ';

    isPrime = true;
}
console.log('String-> ' + strPrimeNums);
strPrimeNums = strPrimeNums.substring(0, strPrimeNums.length - 2);
console.log('String-> ' + strPrimeNums);

