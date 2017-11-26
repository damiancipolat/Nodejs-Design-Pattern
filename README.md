# Nodejs-Design-Pattern

En este repositorio voy a volcar los patrones de diseño obtenidos de la lectura que realize de este libro.

![N|Solid](http://damiancipolat.com/webFiles/portada-libro-node-1.png)

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
- Valiadación de datos: El proxy valida la entrada antes de enviarla al sujeto.
- Seguridad: El proxu verifica que el cliente este autorizado a realizar una operación al sujeto antes de pasarselo.
- Caching: The proxy keeps an internal cache so that the operations are executed on the subject only if the data is not yet present in the cache.
- Lazy initialization: If the creation of the subject is expensive, the proxy can delay it to when it's really necessary.
- Logging: The proxy intercepts the method invocations and the relative parameters, recoding them as they happen.
- Remote objects: A proxy can take an object that is located remotely, and make it appear local.

Un ejemplo base es el siguiente, para ver otros ir a **[proxy.js]**:

[proxy.js]:https://github.com/damiancipolat/Nodejs-Design-Pattern/blob/master/proxy.js

```js


```
