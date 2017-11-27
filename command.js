 
const add=(x, y)=> { return x + y; }
const sub=(x, y)=> { return x - y; }
const mul=(x, y)=> { return x * y; }
const div=(x, y)=> { return x / y; }
 
const Command = (execute, undo, value)=> {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
}
 
const AddCommand = (value)=>{
    return new Command(add, sub, value);
};
 
const SubCommand = (value)=>{
    return new Command(sub, add, value);
};
 
const MulCommand =  (value)=> {
    return new Command(mul, div, value);
};
 
const DivCommand =  (value)=> {
    return new Command(div, mul, value);
};
 
const Calculator = function () {
    let current = 0;
    let commands = [];
 
    const action=(command)=> {
        var name = command.execute.toString().substr(9, 3);
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
 
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
        }
    }
}
 

 
function run() {

    var calculator = new Calculator();
 
    calculator.execute(new AddCommand(100));
    calculator.execute(new SubCommand(24));
    calculator.execute(new MulCommand(6));
    calculator.execute(new DivCommand(2));
  
    calculator.undo();
    calculator.undo();

}