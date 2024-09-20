test("double(2) should be 4", () => {
  equal(double(2), 4);
});
test("double(4) should be 8", () => {
  equal(double(4), 8);
});
// testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});

test("filter() should return an array of length less than or equal to the number of elements.", () => {
  const result = filter([1], () => {});
  equal(result.length, 0);

  const result2 = filter([1], (x) => {
    return x > 0;
  });
  equal(result2.length, 1);

  const result3 = filter([1], (x) => {
    return x < 0;
  });
  equal(result3.length, 0);
});

test("every() should only return boolean", () => {
  const result = every([true], (x) => {
    return x;
  });
  const expected = "boolean";
  equal(typeof result, expected);
});

test("every() should return false for (x)=>{}", () => {
  const result = every([true], (x) => {});
  const expected = false;
  equal(result, expected);
});

test("every() should return true for empty array", () => {
  const result = every([], (x) => {
    return x > 1;
  });
  const expected = true;
  equal(result, expected);
});

test("some() should only return boolean", () => {
  const result = some([true], (x) => {
    return x;
  });
  const expected = "boolean";
  equal(typeof result, expected);
});

test("some() should return false for (x)=>{}", () => {
  const result = some([true], (x) => {});
  const expected = false;
  equal(result, expected);
});

test("some() should return true for empty array", () => {
  const result = some([], (x) => {
    return x > 1;
  });
  const expected = false;
  equal(result, expected);
});

test("find() returns undefined if no element satisfies condition", () => {
  const result = find([], (x) => {
    return x > 1;
  });
  const expected = undefined;
  equal(result, expected);
});

test("find() returns undefined with array of falsy values", () => {
  const result = find([false, 0, null, undefined], (x) => {
    return x;
  });
  const expected = undefined;
  equal(result, expected);
});

test("find() returns the first value that satisfies the condition", () => {
  const arr = [1, 2, 3];
  const result = find([1, 2, 3], (x) => {
    return x > 1;
  });
  const index = arr.indexOf(result);
  const expected = 1;
  equal(index, expected);
});

test("reduce should return a final value.", () => {
  const result = reduce(
    [1, 2, 3],
    (total, x) => {
      return total + x;
    },
    0
  );
  const expected = 6;
  equal(result, expected);
});

test("reduce should concatenate an array of strings.", () => {
  const result = reduce(["Hello", " ", "World", "!"], (acc, x) => acc + x, "");
  const expected = "Hello World!";
  equal(result, expected);
});

test("reduce should sum numbers without initial accumulator.", () => {
  const result = reduce([1, 2, 3, 4], (acc, x) => acc + x);
  const expected = 10;
  equal(result, expected);
});

test("reduce should return the maximum value from an array.", () => {
  const result = reduce([5, 10, 15, 2, 8], (max, x) => (x > max ? x : max), 0);
  const expected = 15;
  equal(result, expected);
});

test("reduce should return initial accumulator for an empty array.", () => {
  const result = reduce([], (acc, x) => acc + x, 10);
  const expected = 10;
  equal(result, expected);
});

test("reduce should sum a specific property from an array of objects.", () => {
  const data = [{ value: 10 }, { value: 20 }, { value: 30 }];

  const result = reduce(data, (acc, obj) => acc + obj.value, 0);
  const expected = 60;
  equal(result, expected);
});

test("reduce should multiply all numbers.", () => {
  const result = reduce([1, 2, 3, 4], (acc, x) => acc * x, 1);
  const expected = 24;
  equal(result, expected);
});

test("reduce should check if all numbers are positive.", () => {
  const result = reduce([1, 2, 3, 4], (acc, x) => acc && x > 0, true);
  const expected = true;
  equal(result, expected);
});

test("flat should return the same array if there is no nesting.", () => {
  const result = flat([1, 2, 3], 1);
  const expected = [1, 2, 3];
  equal(result.toString(), expected.toString());
});

test("flat should flatten one level.", () => {
  const result = flat([1, [2, 3], 4], 1);
  const expected = [1, 2, 3, 4];
  equal(result.toString(), expected.toString());
});

test("flat should fully flatten with Infinity depth.", () => {
  const result = flat([1, [2, [3, [4]]]], Infinity);
  const expected = [1, 2, 3, 4];
  equal(result.toString(), expected.toString());
});
