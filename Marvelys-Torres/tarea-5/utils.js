export const generatedArray = (size) => {
  let counter = 0;
  const newArray = [];
  while (counter < size) {
    newArray.push(counter);
    counter++;
  }
  return newArray;
};
