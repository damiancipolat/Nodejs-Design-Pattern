/*
  Ejemplo Fabrica de personas
*/
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

//Invocación.
let fabrica = new personFactory();
fabrica.setName('Damián');
fabrica.setSurname('Cipolat');
fabrica.setAge(30);
fabrica.setSex('M');

let damian = fabrica.build();

console.log(damian);

/*
  Ejemplo fabrica de profilers.
*/
class profiler{
	
	constructor(label){
		this.label 	  = label;
		this.lastTime = null;
	}
	
	start(){
		this.lastTime = process.hrtime();
	}
	
	end(){
		let dif = process.hrtime(this.lastTime);
		
		console.log('Timer "' + this.label + '" took '+ diff[0] + ' seconds and '+ diff[1] + ' nanoseconds.');	
	}
}

//Invocación.
if(process.env.NODE_ENV === 'development')	
 return new Profiler(label);
else{
	
	if(process.env.NODE_ENV === 'production')
	 return {
				start: function() {},
				end: function() {}
			}
	else{
		throw new Error('Must set NODE_ENV');
	}
 }
