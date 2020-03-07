class YourClass {
  constructor() {}
  addSubtract(arg1, arg2, add) {
    var result;
    if (add) {
      result = arg1 + arg2;
      return result;
    } else {
      result = arg1 - arg2;
      return result;
    }
  }
}

module.exports = YourClass;
