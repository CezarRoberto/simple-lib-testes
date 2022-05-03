it("should sum 2 and 2 and the result must be 4", () => {
  const sum = (num1, num2) => {
    return num1 + num2;
  };
  expect(sum(2, 2)).toBe(4);
});

it("should sum 2 and 2 even if one of them is a string and the result must be 4", () => {
  const sum = (num1, num2) => {
    return +num1 + parseInt(num2, 10);
  };
  expect(sum('2', '2')).toBe(4);
});

it('should throw a error if is provided to the method if didnt receive a number', () => {
  const sum = (num1, num2) => {
    const int1 = parseInt(num1, 10)
    const int2 = parseInt(num2, 10)
    

    if (Number.isNaN(int1) || Number.isNaN(int2)) {
      throw new Error('Please check variables')
    }
    return +int1 + +int2
  }

  expect(() => sum('','')).toThrowError()
  expect(() => sum()).toThrowError()
  expect(() => sum({})).toThrowError()
});
