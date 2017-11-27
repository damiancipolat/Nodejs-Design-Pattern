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