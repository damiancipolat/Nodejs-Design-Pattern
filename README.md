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

### Factory:
> Una fabrica nos permite separarm la creación dew un objeto de su implementación, esencialmente, la fabrica encapsula la creación de una nueva instancia, dandonos más flexibilidad y control en la manera de que hacemos esto.

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
