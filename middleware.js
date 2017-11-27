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