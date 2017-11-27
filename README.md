# Nodejs-Design-Pattern

En este repositorio voy a volcar los patrones de diseño obtenidos de la lectura que realize de este libro.

![N|Solid](http://damiancipolat.com/webFiles/portada-libro-node-1.png)

Podes descargar el libro desde el sig. link https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/Nodejs_Design_Patterns_1.pdf


Pondre ejemplos base de cada patron y agregados por mi.

## Lista de patrones:

- Factory
- Proxy
- Decorator
- Adapter
- Strategy
- State
- Template
- Middleware
- Command
- Singleton
- Universal

La forma de escribir estos patrones de diseño no es igual que en JAVA y C#, pero la escencia es la misma, es es debido a que en este lenguaje predominan más los conceptos de la programación funcional que de la programación orientada a objetos.

Voy adaptar los ejemplos de codigo js del libro al estandar ES6.

## Factory:
> Una fabrica nos permite separarm la creación dew un objeto de su implementación, esencialmente, la fabrica encapsula la creación de una nueva instancia, dandonos más flexibilidad y control en la manera de que hacemos esto.

Un ejemplo base es el siguiente, para ver otros ir a **[factory.js]**:

[factory.js]:https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/factory.js

```js

class person{

    constructor(name,surname,age,sex){

      this.name = name;
      this.surname = surname;
      this.age = age;
      this.sex = sex;

    }

}

class personFactory{

   constructor(name,surname,age,sex){

      this.name    = null;
      this.surname = null;
      this.age = null;
      this.sex = null;

    }

    setName(name){
        this.name = name;
    }

    setSurname(surname){
        this.surname = surname;
    }

    setAge(age){
        this.age = age;
    }    

    setSex(sex){
        this.sex = sex;
    }

    build(){

        return new person(this.name,this.surname,this.age,this.sex);

    }

}

let fabrica = new personFactory();
fabrica.setName('Damián');
fabrica.setSurname('Cipolat');
fabrica.setAge(30);
fabrica.setSex('M');

let damian = fabrica.build();

console.log(damian);

```

## Proxy:
> Un proxy es un objeto que controla el acceso a otro llamado sujeto.
El proxy y el sujeto llamado tienen una interaz identica y estos nos permite trabajar trasparentemente con el,
intercerpta todas o algunas operaciones que se pretenden ejecutar al objeto sujeto.

Podemos considerar usar proxy para estos ejemplos:
- **Validación de datos**: El proxy valida la entrada antes de enviarla al sujeto.
- **Seguridad**: El proxy verifica que el cliente este autorizado a realizar una operación al sujeto antes de pasarselo.
- **Cache**: El proxy mantiene una cache interna de las operaciones ejecutadas en el sujeto, la operación es ejecutada si no se encuentra en la cache.
- **Lazy initialization**: Si la creación del sujeto es muy complicada, el proxy puede frenar esto solo cuando es necesario.
- **Logeo**: El proxy intercepta la invocación a metodos del sujeto y graba los parametros de entrada y las salidas.
- **Objetos remotos**: El proxy puede tomar el objeto que esta ubicado remotamente y lo hace aparecer como si fuera local.

Un ejemplo base es el siguiente, para ver otros ir a **[proxy.js]**:

[proxy.js]:https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/proxy.js

```js

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

```

## Decorator:
> Decorator es un patron estructural, consiste en aumentar dinamicamente el comportamiento de un objeto existente.
Es diferente de la herencia claisca, por que el comportamiento no es agregado a todos los objetos de la misma clase.

La implementación es muy similar al patron proxy, pero en lugar de mejorar o modificar el comportamiento de la interfaz existente del objeto, este incrementea con nuevas funcionaliodades.

Un ejemplo base es el siguiente, para ver otros ir a **[decorator.js]**:

[decorator.js]:https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/decorator.js

```js
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
```

## Adapter:
> El patron adaptador nos permite acceder a la funcionalidad de un objeto que usa una interfaz diferente.
Como el nombre nos dice adapta al objeto que usa una interfaz distinta, para que podamos usarlo con una misma interfaz.

Un ejemplo base es el siguiente, para ver otros ir a **[adapter.js]**:

[adapter.js]:https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/adapter.js

```js
//Interfaz antigua
class shipping{
  request(zipStart, zipEnd, weight)=>{        
        return "$49.75";
  }
}

//Interfaz nueva.
class AdvancedShipping() {
    login(credentials){ /* ... */ };
    setStart(start){ /* ... */ };
    setDestination(destination) { /* ... */ };
    calculate(weight) { return "$39.50"; };
}
 
//Adaptador 
class ShippingAdapter(credentials) {

  constructor(){
    this.shipping = new AdvancedShipping();  
    this.shipping.login(credentials);
  }

  request(zipStart, zipEnd, weight) {    
    this.shipping.setStart(zipStart);
    this.shipping.setDestination(zipEnd);

    return this.shipping.calculate(weight);
  }

}

let credentials = {token: "30a8-6ee1"};
let adapter     = new ShippingAdapter(credentials);
let cost        = adapter.request("78701", "10010", "2 lbs"); 

console.log(cost);
```

## Strategy:
> El patron strategy permite encapsular un algoritmo en una clase, los cuales tienen la misma interfaz y son
intercambiables según la situacion. Podemos definir una familia de algormitmos encapsulados en un objeto.

Un ejemplo base es el siguiente, para ver otros ir a **[strategy.js]**:

[strategy.js]:https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/strategy.js

```js

class alumnHard{

  constructor(){
    this.iq = 90;
    this.studyPower = 100;
  }

  studyStat(){
    return this.iq+this.studyPower;
  }

}

class alumnLazy{
  constructor(){
    this.iq = 20;
    this.studyPower = 50;
    this.funLevelr  = 90;
  }

  studyStat(){
    return (this.iq+this.studyPower)-this.funLevel;
  }
}

class test{  
  constructor(){
    this.alumn = null;
  }

  setAlumn(alumn){
    this.alumn = alumn;
  }

  make(){
    this.alumn.study();
  }
}

let mathTest = new test();

mathTest.setAlumn(new alumnLazy());
mathTest.make();

mathTest.setAlumn(new alumnHard());
mathTest.make();
```

## State:
> El patron state es una variacón del patron strategy, donde los cambios dependen del estado y hay un algoritmo encapsulado
que es usando en cada estado.

Un ejemplo base es el siguiente, para ver otros ir a **[state.js]**:

[state.js]:https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/state.js

```js

```

## Template:
> El patron template consiste en definir una clase abstracta que representa el esquelete de un algoritmo donde alguno
de sus pasos no son definidos, las subclases que lo hereden implementaran estos pasos sin definir.

Un ejemplo base es el siguiente, para ver otros ir a **[template.js]**:

[template.js]:https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/template.js

```js

```

## Middleware:
> 

Un ejemplo base es el siguiente, para ver otros ir a **[middleware.js]**:

[middleware.js]:https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/middleware.js

```js

```

## Command:
> 

Un ejemplo base es el siguiente, para ver otros ir a **[command.js]**:

[command.js]:https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/command.js

```js

```

## Singleton:
> 

Un ejemplo base es el siguiente, para ver otros ir a **[singleton.js]**:

[singleton.js]:https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/singleton.js

```js

```

## Universal:
> 

Un ejemplo base es el siguiente, para ver otros ir a **[universal.js]**:

[universal.js]:https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/universal.js

```js

```
