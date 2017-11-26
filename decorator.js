class person(){

  hello(){
    return 'hello world';
  }

  greetings(){
    return 'greetings people';
  }

}

class personDecorator{

  constructor(component){
    this.component = component;
  }

  hello(){
    return this.component.hello();
  }

  greetings(){
    return this.component.greetings();
  }

  jump(){
    return this.component.hello() + this.component.greetings();
  }

}

let damian      = new person();
let decorPeople = new personDecorator(damian);

damian.hello();
damian.greetings();

console.log(damian.jump());