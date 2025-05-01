function fibs(n) {
  const secFib = [];
  let a = 0;
  let b = 1;
  let c = 0;

  for (let i = 0; i < n; i++) {
    secFib.push(a);
    c = a + b;
    a = b;
    b = c;
  }

  return secFib;
}

function fibsRec(n) {
  if (n <= 0) {
    return [];
  }

  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  const prev = fibsRec(n - 1);
  return [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
}

console.log(fibs(0));
console.log(fibsRec(7));
