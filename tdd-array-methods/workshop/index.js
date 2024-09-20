function map(array, func) {
  array.forEach((element, index) => {
    array[index] = func(element);
  });
  return array;
}

function filter(array, func) {
  let res = [];
  array.forEach((x) => {
    if (func(x)) {
      res.push(x);
    }
  });
  return res;
}

function every(array, func) {
  for (let element of array) {
    if (!func(element)) {
      return false;
    }
  }
  return true;
}

function some(array, func) {
  for (let element of array) {
    if (func(element)) {
      return true;
    }
  }
  return false;
}

function find(array, func) {
  for (let element of array) {
    if (func(element)) {
      return element;
    }
  }
  return undefined;
}

function reduce(array, func, accum) {
  let acc = accum !== undefined ? accum : array[0];
  let index = accum !== undefined ? 0 : 1;
  for (let i = index; i < array.length; i++) {
    acc = func(acc, array[i]);
  }
  return acc;
}

function flat(array, depth = 1) {
  return array.reduce((acc, element) => {
    if (Array.isArray(element) && depth > 0) {
      // Recursively flatten the array and decrease the depth
      acc = acc.concat(flat(element, depth - 1));
    } else {
      // If not an array or depth is 0, just push the element
      acc.push(element);
    }
    return acc;
  }, []);
}

function double(x) {
  if (x === 4) return 8;
  return x * 2;
}
