# Nodejs-Design-Pattern

> "Este repositorio esta pensado para que sea más como un resumen de contenidos, más que para alojar proyectos de codígo."

En este repositorio voy a volcar los patrones de diseño obtenidos de la lectura que realicé del siguiente libro.

<!-- Esta url tira el siguiente error: Cannot proxy the given URL -->
<!-- ![N|Solid](http://damiancipolat.com/webFiles/portada-libro-node-1.png) -->

Si desea descargar el libro en su versión pdf, puede hacerlo desde el siguiente enlace: [NodeJS Design Patterns](https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/Nodejs_Design_Patterns_1.pdf)

<!-- Quitaría esta oración, ya que más adelante mencionas que adaptas los ejemplos del libro a ES6 y ahi pondrí, como lo puse después, que ademas de esos ejemplos agregas otros de tu autoria  -->

Pondre ejemplos base de cada patron y agregados por mi.

## Lista de patrones:

- **[Factory]**
- **[Proxy]**
- **[Decorator]**
- **[Adapter]**
- **[Strategy]**
- **[State]**
- **[Template]**
- **[Middleware]**
- **[Command]**
- **[Singleton]**
- **[Universal]**

[factory]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/README.md#factory
[proxy]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/README.md#proxy
[decorator]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/README.md#decorator
[adapter]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/README.md#adapter
[strategy]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/README.md#strategy
[state]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/README.md#state
[template]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/README.md#template
[middleware]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/README.md#middleware
[command]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/README.md#command
[singleton]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/README.md#singleton
[universal]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/README.md#universal

La forma de escribir estos patrones de diseño no es igual que en JAVA y C#, pero la esencia es la misma. Esto se debe a que en el lenguaje JavaScript (en adelante JS) predominan más los conceptos de la programación funcional que los de la programación orientada a objetos.

Los ejemplos de código JS presentes en el libro serán adaptados al estandar ES6, agregando además ejemplos de mi autoría basados en los conceptos del libro.

## Factory:

> Un **_factory_** nos permite separar la creación de un objeto de la implementación del mismo. Esencialmente, el _factory_ encapsula la creación de una nueva instancia, lo que nos brinda más flexibilidad y control en la manera en que hacemos esto.

Un ejemplo base es el siguiente:

```js
class person {
  constructor(name, surname, age, sex) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sex = sex;
  }
}

class personFactory {
  constructor(name, surname, age, sex) {
    this.name = null;
    this.surname = null;
    this.age = null;
    this.sex = null;
  }

  setName(name) {
    this.name = name;
  }

  setSurname(surname) {
    this.surname = surname;
  }

  setAge(age) {
    this.age = age;
  }

  setSex(sex) {
    this.sex = sex;
  }

  build() {
    return new person(this.name, this.surname, this.age, this.sex);
  }
}

let fabrica = new personFactory();
fabrica.setName("Damián");
fabrica.setSurname("Cipolat");
fabrica.setAge(30);
fabrica.setSex("M");

let damian = fabrica.build();

console.log(damian);
```

**Nota: puede encontrar otros ejemplos aquí [factory.js]:**

[factory.js]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/factory.js

## Proxy:

> Un _proxy_ es un objeto que controla el acceso a otro llamado _subject_. El proxy y el subject tienen una inteFaz idéntica y estos nos permite trabajar con uno u otro de forma transparente. El _proxy_ intercepta todas o algunas operaciones que se pretenden ejecutar sobre el subject.

Podemos considerar el uso de un _proxy_ en situaciones como las siguientes:

- **Validación de datos**: El proxy valida la entrada antes de enviarla al subject.
- **Seguridad**: El proxy verifica que el cliente este autorizado a realizar una operación y se la pasa al subject si el resultado es positivo.
- **Caché**: El proxy mantiene una caché interna de las operaciones ejecutadas en el subject, la operación es ejecutada si no se encuentra en la caché.
- **Lazy Initialization**: Si la creación del subject es muy costosa, el proxy puede demorarlo solo cuando sea necesario.
- **Logging**: El proxy intercepta la invocación de métodos del sujeto y graba los parámetros de entrada y salida.
- **Objetos remotos**: El proxy puede tomar un objeto que se encuentra en una ubicación remota y lo hace parecer como si fuera local.

Un ejemplo base es el siguiente:

```js
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
```

**Nota: puede encontrar otros ejemplos aquí [proxy.js]:**

[proxy.js]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/proxy.js

## Decorator:

> Decorator es un patron estructural, consiste en aumentar dinamicamente el comportamiento de un objeto existente.
> Es diferente de la herencia claisca, por que el comportamiento no es agregado a todos los objetos de la misma clase.

La implementación es muy similar al patron proxy, pero en lugar de mejorar o modificar el comportamiento de la interfaz existente del objeto, este incrementea con nuevas funcionaliodades.

Un ejemplo base es el siguiente, para ver otros ir a **[decorator.js]**:

[decorator.js]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/decorator.js

```js
class person {
  hello() {
    return "hello world";
  }

  greetings() {
    return "greetings people";
  }
}

class personDecorator {
  constructor(component) {
    this.component = component;
  }

  hello() {
    return this.component.hello();
  }

  greetings() {
    return this.component.greetings();
  }

  jump() {
    return this.component.hello() + this.component.greetings();
  }
}

let damian = new person();
let decorPeople = new personDecorator(damian);

damian.hello();
damian.greetings();

console.log(damian.jump());
```

## Adapter:

> El patron adaptador nos permite acceder a la funcionalidad de un objeto que usa una interfaz diferente.
> Como el nombre nos dice adapta al objeto que usa una interfaz distinta, para que podamos usarlo con una misma interfaz.

Un ejemplo base es el siguiente, para ver otros ir a **[adapter.js]**:

[adapter.js]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/adapter.js

```js
//Interfaz antigua
class shipping {
  request(zipStart, zipEnd, weight) {
    return "$49.75";
  }
}

//Interfaz nueva.
class AdvancedShipping {
  login(credentials) {
    /* ... */
  }
  setStart(start) {
    /* ... */
  }
  setDestination(destination) {
    /* ... */
  }
  calculate(weight) {
    return "$39.50";
  }
}

//Adaptador
class ShippingAdapter {
  constructor(credentials) {
    this.shipping = new AdvancedShipping();
    this.shipping.login(credentials);
  }

  request(zipStart, zipEnd, weight) {
    this.shipping.setStart(zipStart);
    this.shipping.setDestination(zipEnd);

    return this.shipping.calculate(weight);
  }
}

let credentials = { token: "30a8-6ee1" };
let adapter = new ShippingAdapter(credentials);
let cost = adapter.request("78701", "10010", "2 lbs");

console.log(cost);
```

## Strategy:

> El patron strategy permite encapsular un algoritmo en una clase, los cuales tienen la misma interfaz y son
> intercambiables según la situacion. Podemos definir una familia de algormitmos encapsulados en un objeto.

Un ejemplo base es el siguiente, para ver otros ir a **[strategy.js]**:

[strategy.js]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/strategy.js

```js
class alumnHard {
  constructor() {
    this.iq = 90;
    this.studyPower = 100;
  }

  studyStat() {
    return this.iq + this.studyPower;
  }
}

class alumnLazy {
  constructor() {
    this.iq = 20;
    this.studyPower = 50;
    this.funLevelr = 90;
  }

  studyStat() {
    return this.iq + this.studyPower - this.funLevel;
  }
}

class test {
  constructor() {
    this.alumn = null;
  }

  setAlumn(alumn) {
    this.alumn = alumn;
  }

  make() {
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
> que es usando en cada estado.

Un ejemplo base es el siguiente, para ver otros ir a **[state.js]**:

[state.js]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/state.js

```js
const OfflineState = require("./offlineState");
const OnlineState = require("./onlineState");

const FailsafeSocket = (options) => {
  this.options = options;
  this.queue = [];
  this.currentState = null;
  this.socket = null;
  this.states = {
    offline: new OfflineState(this),
    online: new OnlineState(this),
  };

  this.changeState("offline");
};

FailsafeSocket.prototype.changeState = function (state) {
  console.log("Activating state: " + state);
  this.currentState = this.states[state];
  this.currentState.activate();
};

FailsafeSocket.prototype.send = function (data) {
  this.currentState.send(data);
};

export default (options) => new FailsafeSocket(options);
```

## Template:

> El patron template consiste en definir una clase abstracta que representa el esquelete de un algoritmo donde alguno
> de sus pasos no son definidos, las subclases que lo hereden implementaran estos pasos sin definir.

Un ejemplo base es el siguiente, para ver otros ir a **[template.js]**:

[template.js]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/template.js

```js
var fs = require("fs");
var objectPath = require("object-path");

class ConfigTemplate {
  read(file) {
    console.log("Deserializing from " + file);
    this.data = this._deserialize(fs.readFileSync(file, "utf-8"));
  }

  save(file) {
    console.log("Serializing to " + file);
    fs.writeFileSync(file, this._serialize(this.data));
  }

  get(path) {
    return objectPath.get(this.data, path);
  }

  set(path, value) {
    return objectPath.set(this.data, path, value);
  }

  _serialize() {
    throw new Error("_serialize() must be implemented");
  }

  _deserialize() {
    throw new Error("_deserialize() must be implemented");
  }
}

export default ConfigTemplate;
```

## Middleware:

> El patron consiste en definir una lista de funciones, en las que se define un pipe, en que la salida de una función es la entrada de la siguiente.

Un ejemplo base es el siguiente, para ver otros ir a **[middleware.js]**:

[middleware.js]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/middleware.js

```js
class product {
  constructor(country, price, type) {
    this.country = country;
    this.prices = price;
    this.type = type;
  }
}

const totalTax = 0;

const taxOrigin = (product) => {
  if (product.country == "ARG") totalTax += 100;
  else totalTax += 300;
};

const taxPrices = (product) => {
  if (product.prices > 100) totalTax += 80;
  else totalTax += 200;
};

const taxType = (product) => {
  if (product.type == "ELECTRO") totalTax += 80;

  if (product.type == "FOOD") totalTax += 280;

  if (product.type == "DRINKS") totalTax += 580;
};

let articles = [
  new product("ARG", 100, "ELECTRO"),
  new product("USA", 400, "FOOD"),
  new product("EUA", 40, "DRINKS"),
];

let functions = [taxOrigin, taxPrices, taxType];

articles.forEach((article) => {
  functions.forEach((funcCalc) => {
    totalTax += funcCalc(article);
  });
});
```

## Command:

> En su mayor definición genérica, podemos considerar un comando como cualquier objeto que encapsula todo el
> información necesaria para realizar una acción en un momento posterior. Entonces, en lugar de invocar un método o una función directamente, creamos un objeto que representa la intención de realizar tal invocación; será responsabilidad de otro componente
> materializar la intención, transformándola en una acción real.

Un ejemplo base es el siguiente, para ver otros ir a **[command.js]**:

[command.js]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/command.js

```js
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

const Command = (execute, undo, value) => {
  this.execute = execute;
  this.undo = undo;
  this.value = value;
};

const AddCommand = (value) => new Command(add, sub, value);

const SubCommand = (value) => new Command(sub, add, value);

const MulCommand = (value) => new Command(mul, div, value);

const DivCommand = (value) => new Command(div, mul, value);

const Calculator = function () {
  let current = 0;
  let commands = [];

  const action = (command) => {
    var name = command.execute.toString().substr(9, 3);
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return {
    execute: function (command) {
      current = command.execute(current, command.value);
      commands.push(command);
      log.add(action(command) + ": " + command.value);
    },

    undo: function () {
      var command = commands.pop();
      current = command.undo(current, command.value);
      log.add("Undo " + action(command) + ": " + command.value);
    },

    getCurrentValue: function () {
      return current;
    },
  };
};

function run() {
  var calculator = new Calculator();

  calculator.execute(new AddCommand(100));
  calculator.execute(new SubCommand(24));
  calculator.execute(new MulCommand(6));
  calculator.execute(new DivCommand(2));

  calculator.undo();
  calculator.undo();
}
```

## Singleton:

> El Singleton es quizás el más sencillo de los patrones que se presentan en el catálogo del GoF (disponible en el libro Patrones de Diseño y analizado previamente en "Patrones y Antipatrones: una introducción"). Es también uno de los patrones más conocidos y utilizados. Su propósito es asegurar que sólo exista una instancia de una clase.

En nodejs los modulos pueden considerarse también como implementaciones del patron singleton.

Un ejemplo base es el siguiente, para ver otros ir a **[singleton.js]**:

[singleton.js]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/singleton.js

```js
exports = module.exports = (function () {
  var instance;

  function init() {
    return {
      extend: function extend(extension, obj) {
        for (var key in extension) {
          obj[key] = extension[key];
        }
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();
```

## Universal:

En Node.js, sabemos perfectamente que los módulos CommonJS son los predeterminados
mecanismo para establecer dependencias entre componentes. La situación en
el espacio del navegador lamentablemente está mucho más fragmentado:

- Es posible que tengamos un entorno sin ningún sistema de módulos, que significa que los globales son el mecanismo principal para acceder a otros módulos.

- Es posible que tengamos un entorno basado en un Asincrónico Cargador de definición de módulo (AMD), como por ejemplo, RequireJS
  (http://requirejs.org)

- Es posible que tengamoszun entorno que abstraiga el sistema del módulo CommonJS.

Afortunadamente, hay un conjunto de patrones llamado Universal Module Definition (UMD) que puede ayudarnos a abstraer nuestro código del sistema de módulos utilizado en el entorno.

Un ejemplo base es el siguiente, para ver otros ir a **[universal.js]**:

[universal.js]: https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/universal.js

```js
(function (root, factory) {                           //[1]
  if (typeof define === "function" && define.amd) {   //[2]
    define(["mustache"], factory);
  } else if (
    typeof module === "object" &&                     //[3]
    typeof module.exports === "object"
  ) {
    var mustache = require("mustache");
    module.exports = factory(mustache);
  } else {                                            //[4]
    root.UmdModule = factory(root.Mustache);
  }
})(this, function (mustache) {                        //[5]
  var template = "<h1>Hello <i>{{name}}</i></h1>";
  mustache.parse(template);

  return {
    sayHello: function (toWhom) {
      return mustache.render(template, { name: toWhom });
    },
  };
});
```

<!-- Este bloque lo estoy traduciendo textual del libro -->
***Fragmento del libro***

1. _Todo el código está envuelto en una función de ejecución automática anónima (IIFE), muy similar al patrón **Revealing Module** (Capítulo 1, Fundamentos del diseño de Node.js). La función acepta un parámetro root que es el objeto de espacio de nombres global disponible en el sistema (por ejemplo, una ventana en el navegador). Esto es necesario principalmente para registrar la dependencia como una variable global, como veremos en un momento. El segundo argumento es la fábrica () del módulo, una función que devuelve una instancia del módulo y acepta sus dependencias como entrada (Inyección de dependencias)._

2. _Lo primero que hacemos es verificar si AMD está disponible en el sistema. Hacemos esto verificando la existencia de la función define y su bandera amd. Si se encuentra, significa que tenemos un cargador AMD en el sistema, por lo que procedemos a registrar nuestro módulo utilizando define y requiere que el bigote de dependencia se inyecte en factory ()._

3. _Luego verificamos si estamos en un entorno CommonJS con sabor a Node.js verificando la existencia del módulo y los objetos module.exports. Si ese es el caso, cargamos las dependencias del módulo usando require () y las proporcionamos a la fábrica (). El valor de retorno de la fábrica se asigna a module.exports._

4. _Por último, si no tenemos AMD ni CommonJS, procedemos a asignar el módulo a una variable global, utilizando el objeto root, que en un entorno de navegador generalmente será el objeto de ventana. Además, puede ver cómo se espera que la dependencia, Moustache, también esté en el ámbito global._

5. _Como paso final, la función contenedora se invoca automáticamente, proporcionando este objeto como root (en el navegador, será el objeto de ventana) y proporcionando nuestra fábrica de módulos como un segundo argumento. Puede ver cómo la fábrica acepta sus dependencias como argumentos._
