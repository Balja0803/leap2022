function findSum(k, j) {
  if (k < j) {
    return 0;
  }
  return k + findSum(k + 1, j);
}
