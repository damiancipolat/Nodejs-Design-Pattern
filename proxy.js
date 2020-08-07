/*  Ejemplo base  */
class subject {
  hello() {
    return "hello";
  }

  goodbye() {
    return "Goodbye people!";
  }
}

class Proxy {
  constructor(subject) {
    this.subject = subject;
  }

  hello() {
    return this.subject.hello() + " world!";
  }

  goodbye() {
    return this.subject.goodbye();
  }
}

let tmpsubj = new subject();
let proxy = new Proxy(tmpsubj);

console.log(proxy.hello());
console.log(proxy.goodbye());

/*  Ejemplo Data Validation */
class calculator {
  sumCalc(a, b) {
    return a + b;
  }

  diffCalc(a, b) {
    return a - b;
  }
}

class validatorCalc {
  constructor(subject) {
    this.subject = subject;
  }

  sumar(numA, numB) {
    if (typeof numA == "number" && typeof numB == "number")
      return this.subject.sumCalc(numA, numB);
    else throw "Parámetros no numéricos";
  }

  restar(numA, numB) {
    if (typeof numA == "number" && typeof numB == "number")
      return this.subject.diffCalc(numA, numB);
    else throw "Parámetros no numéricos";
  }
}

let calculator = new calculator();
let validator = new validatorCalc(calculator);

console.log(validator.sumar(2, 5));
console.log(validator.restar(80, 5));

/*  Ejemplo log  */
function createLoggingWritable(writableOrig) {
  var proto = Object.getPrototypeOf(writableOrig);

  function LoggingWritable(subject) {
    this.writableOrig = writableOrig;
  }

  LoggingWritable.prototype = Object.create(proto);

  LoggingWritable.prototype.write = function (chunk, encoding, callback) {
    if (!callback && typeof encoding === "function") {
      callback = encoding;
      encoding = undefined;
    }

    console.log("Writing ", chunk);

    return this.writableOrig.write(chunk, encoding, function () {
      console.log("Finished writing ", chunk);
      callback && callback();
    });
  };

  LoggingWritable.prototype.on = function () {
    return this.writableOrig.on.apply(this.writableOrig, arguments);
  };

  LoggingWritable.prototype.end = function () {
    return this.writableOrig.end.apply(this.writableOrig, arguments);
  };

  return new LoggingWritable(this.writableOrig);
}

var fs = require("fs");
var writable = fs.createWriteStream("test.txt");
var writableProxy = createProxy(writable);
writableProxy.write("First chunk");
writableProxy.write("Second chunk");
writable.write("This is not logged");
writableProxy.end();
