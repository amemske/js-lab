const possible = (a, b) => {
  let x = a;
  let y = b;
  for (let i = 1; i <= 6; i++) {
    x += 1;
    if (x === y) {
      return true;
    }
  }
  return false;
};

possible(3, 7);
