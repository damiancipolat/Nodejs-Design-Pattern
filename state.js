/* Ejemplo base */

const OfflineState = require('./offlineState');
const OnlineState  = require('./onlineState');

const FailsafeSocket =(options)=>{ 
   this.options = options;
   this.queue = [];
   this.currentState = null;
   this.socket = null;
   this.states = {
   offline: new OfflineState(this),
   online: new OnlineState(this)
   }

  this.changeState('offline');

}

FailsafeSocket.prototype.changeState = (state)=>{

 console.log('Activating state: ' + state);
 this.currentState = this.states[state];
 this.currentState.activate();
}

FailsafeSocket.prototype.send = (data)=>{
 this.currentState.send(data);
}

exports default (options)=>{
  return new FailsafeSocket(options);
}