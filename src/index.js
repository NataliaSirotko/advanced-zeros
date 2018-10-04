module.exports = function getZerosCount(number, base) {
  // your implementation
  let max = Infinity, primes = pf(base);
  for (let p in primes) max = Math.min(max, Math.floor(reduce(number, +p)/primes[p]))
  return max;
}

function pf(n) {
  let primes = {};
  for (let i=2; n>1 && i*i<=n; i++) if (n%i===0) {
    while(n%i===0) {
        primes[i]=primes[i]+1||1; n/=i;
      }
    }
    if (n>1) primes[n]=primes[n]+1||1;
  
  return primes;
}

function reduce(number, p) {
  return number<p?0:Math.floor(number/p)+reduce(Math.floor(number/p), p);
}

