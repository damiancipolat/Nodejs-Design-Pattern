/* Ejemplo base */

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

/* EJemplo con busquedas */

class person{

  constructor(name,sex,age){
    this.name = name;
    this.sex  = sex;
    this.age  = age;
  }

}

let nameFilter = (list,val)=>{
  list.filter((item)=>(item.name==val));
}

let sexFilter = (list,val)=>{
  list.filter((item)=>(item.sex==val));
}

let ageFilter = (list,val)=>{
  list.filter((item)=>(item.age==val));
}

let peoples = [new person('Damian','M',30),new person('Paul','M',40),new person('Michael','M',20),new person('Jennifer','F',50)];

nameFinder(peoples,'Damian');

sexFilter(peoples,'F');

ageFilter(peoples,30);