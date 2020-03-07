var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

class MyClass {
  constructor() {
    console.log("initiate");
  }

  sayHello(str) {
    console.log(str);
  }

  add(arg1, arg2) {
    if (1) {
      var result;
      result = arg1 + arg2;
      return result;
    } else {
      return 2;
    }
  }

  callAnotherFn(arg1, arg2) {
    this.sayHello("hello world");
    var result = this.add(arg1, arg2);
    return result;
  }

  testPromise() {
    return new Promise(function(resolve, reject) {
      setTimeout(() => resolve(3), 3000);
    }).then(function(result) {
      return result * 2;
    });
  }

  callTheCallback(callback) {
    callback();
  }

  xhrFn() {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open("post", "https://echo-service-new.herokuapp.com/echo", true);

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.status);
          }
        }
      };
      xhr.send();
    })
      .then(function(result) {
        return result;
      })
      .catch(error => {
        return error;
      });
  }
}

module.exports = MyClass;
