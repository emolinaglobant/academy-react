function smallEnough(a, limit) {
  let result = null;
  let sortList = a.sort((a, b) => a - b);
  sortList.map((i) => {
    return i <= limit ? (result = true) : (result = false);
  });
  return result;
}