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