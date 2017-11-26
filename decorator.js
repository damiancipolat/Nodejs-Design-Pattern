function decorate(component) {

 var proto = Object.getPrototypeOf(component);

 function Decorator(component) {
 this.component = component;
 }
 
 Decorator.prototype = Object.create(proto);
  Decorator.prototype.greetings = function() {
 //...
 };

 //delegated method
 Decorator.prototype.hello = function() {
 this.component.hello.apply(this.component, arguments);
 };

 return new Decorator(component);
}