/* Ejemplo decorator */

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

/* Ejemplo decorador para un log */

const loggingDecorator = (wrapped)=>{

  return ()=>{
    console.log('Starting');
    const result = wrapped.apply(this, arguments);
    console.log('Finished');
    return result;    
  }

}

const doSomething = (name)=>{
  console.log('Hello, ' + name);
}


const wrapped = loggingDecorator(doSomething);

doSomething('Graham');
// Hello, Graham

wrapped('Graham');

// Starting
// Hello, Graham
// Finished