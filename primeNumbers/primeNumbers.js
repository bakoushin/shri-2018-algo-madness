function primeNumbers(n) {
  let primeNumbers = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

function isPrime(n) {
  const middle = Math.floor(n / 2);
  for (let i = 2; i <= middle ; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = primeNumbers;
