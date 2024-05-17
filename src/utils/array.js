const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const addDualNBackValues = (array, nBack) => {
  let randomIndex = getRandomInt(0, array.length - 1);

  let insertIndex = randomIndex - nBack;

  if (insertIndex < 0) {
    insertIndex = 0;
  }

  let randomValue = getRandomInt(1, 9);

  array.splice(insertIndex, 0, randomValue);

  return array;
}

export const fillArray = (n) => {
  const array = [];
  for (let i = 0; i < n; i++) {
      array.push(Math.floor(Math.random() * 9) + 1);
  }

  return array;
};

export const checkIndexesBack = (array, n) => {
  const result = [];
  for (let i = n; i < array.length; i++) {
      if (array[i] === array[i - n]) {
        result.push(i);
      }
  }
  return result;
}

