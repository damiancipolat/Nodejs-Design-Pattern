class subject{

  hello(){
    return 'hello';
  }

  goodbye(){
    return 'Goodbye people!';
  }

}

class Proxy(subject){

  constructor(subject){
    this.subject = subject;
  }

  hello(){
    return this.subject.hello()+' world!';
  }

  goodbye(){
    return this.subject.goodbye();
  }

}

let tmpsubj = new subject();
let proxy   = new Proxy(tmpsubj);

console.log(proxy.hello());
console.log(proxy.goodbye());