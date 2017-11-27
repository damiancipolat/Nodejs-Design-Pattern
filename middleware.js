/* Ejemplo base */
class product{
  constructor(country,price,type){
    this.country = country;
    this.prices  = price;
    this.type    = type;
  }
}

const totalTax = 0;

const taxOrigin = (product) =>{

  if (product.country=='ARG')
    totalTax += 100;
  else
    totalTax += 300;

}

const taxPrices = (product) =>{

  if (product.prices>100)
    totalTax += 80;
  else
    totalTax += 200;

}

const taxType = (product)=>{

  if (product.type=='ELECTRO')
    totalTax += 80;

  if (product.type=='FOOD')
    totalTax += 280;

  if (product.type=='DRINKS')
    totalTax += 580;

}

let articles = [new product('ARG',100,'ELECTRO'),
                new product('USA',400,'FOOD'),
                new product('EUA',40,'DRINKS')];

let functions = [taxOrigin,taxPrices,taxType];

articles.forEach((article)=>{

  functions.forEach((funcCalc)=>{
    totalTax += funcCalc(article);
  });

});


/* Ejemplo de filtros */
const filterAvail=(results,state)=>{
  return results.filter((item)=>item.ida.availability<=parseInt(state.pax));
}

const filterPrice = (results,state)=>{
  return results.filter((item)=>(item.ida.price+item.vuelta.price) <= state.prices.value);;
}

const filterState = (results,state)=>{

  //@Todo pasar a bd este filtro.
  let dest = [];

  dest['COR']  = 'mount';
  dest['BRC '] = 'mountain';
  dest['EPA '] = 'city';
  dest['MDZ '] = 'hot';

  let filters = [];

  if (state.type.mountain)
      filters.push('mountain');

  if (state.type.city)
      filters.push('city');

  if (state.type.hot)
      filters.push('hot');

  if (state.type.sea)
      filters.push('sea');

  if (state.type.mount)
      filters.push('mount');

  if (filters.length > 0)
    return results.filter((item)=>filters.includes(dest[item.ida.destination.iata]));
  else
    return results;

}

const applyFilter = (results,state)=>{

  if (state!=null){

    //Armo un middleware para aplicar los filtros.
    let filters = [filterPrice, filterAvail, filterType];

    //Guardo los datos para ir reduciendolos.
    let resultFilter  = results;

    filters.forEach((filtro)=>{
          
      resultFilter = filtro(resultFilter,state);

    });

    return resultFilter;

  }
  else
    return results;

}