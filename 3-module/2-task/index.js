function filterRange(arr, a, b) {
  // ваш код...
  let result = arr.filter(item => item >= Math.min(a,b) && item <= Math.max(a,b));
    return result;
}
