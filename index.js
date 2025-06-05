const arr =[1,2,4,3,7,9,2,3,7,11,15,13,19];
// prime numbers

const ReturnArr = (arr) => {
   
    const isPrime = (num) => {
        if (num < 2) 
            return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) 
            return false;
        }
        return true;
    };
    let unique = arr.filter(isPrime);

    let uniquePrimes = [];
    for (let i = 0; i < unique.length; i++) {
        if (uniquePrimes.indexOf(unique[i]) === -1) {
            uniquePrimes.push(unique[i]);
        }
    }
    for (let i = 0; i < uniquePrimes.length - 1; i++) {
        for (let j = 0; j < uniquePrimes.length - 1 - i; j++) {
            if (uniquePrimes[j] > uniquePrimes[j + 1]) {
                let temp = uniquePrimes[j];
                uniquePrimes[j] = uniquePrimes[j + 1];
                uniquePrimes[j + 1] = temp;
            }
        }
    }
  
    return uniquePrimes;

};

console.log("Updated Array:", ReturnArr(arr));
//move all zero to end
const movezerotoend=[0,1,0,3,12]
const moveZerotoend=(arr)=>{
    let result = [];
    let zeroCount = 0;
    for(let num of arr){
        if(num === 0) {
            zeroCount++;
        } else {
            result.push(num);
        }
    }
    for(let i = 0; i < zeroCount; i++) {
        result.push(0);
    }
    return result;
}
console.log("Array with Zero Moved to End", moveZerotoend(movezerotoend));

// run by node index.js