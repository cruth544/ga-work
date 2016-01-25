// expect(fn).toThrow(e);
// expect(instance).toBe(instance);
// expect(mixed).toBeDefined();
// expect(mixed).toBeFalsy();
// expect(number).toBeGreaterThan(number);
// expect(number).toBeLessThan(number);
// expect(mixed).toBeNull();
// expect(mixed).toBeTruthy();
// expect(mixed).toBeUndefined();
// expect(array).toContain(member);
// expect(string).toContain(substring);
// expect(mixed).toEqual(mixed);
// expect(mixed).toMatch(pattern);

// describe('make sure math is really universal', function() {
//   it('should add numbers together', function() {
//     var expected = 42;
//     expect(assert).toBe(expected);
//   });
//   it('should negate a number from another', function() {
//     var expected = 20;
//     expect(assert).toBe(expected);
//   });
//   it('should multiple two numbers together', function() {
//     var expected = 49;
//     expect(assert).toBe(expected);
//   });
//   it('should divide a number by another number', function() {
//     var expected = 7;
//     expect(assert).toBe(expected);
//   });
//   it('should correctly return a remainder', function() {
//     var expected = 1;
//     // use modulus aka %
//     expect(assert).toBe(expected);
//   });
// });

function testMax (array) {
  return Math.max.apply(null, array)
}
function testMin (array) {
  return Math.min.apply(null, array)
}

describe('max sure max and min work', function () {
  it('should return largest number', function () {
    var expected = 5
    expect(testMax([1, 2, 3, 4, 5])).toBe(expected)
  })
  it('should return smallest number', function () {
    var expected = 1
    expect(testMin([1, 2, 3, 4, 5])).toBe(expected)
  })
})

function User (name, age) {
  this.name = name,
  this.age = age
}
function userObject () {
  return new User("Morgan", 25)
}

function Bounce (user) {
  return user.age > 21
}

describe('age over 21 should be true', function () {
  it('should be true', function () {
    expect(Bounce(userObject())).toBe(true)
  })
})










































