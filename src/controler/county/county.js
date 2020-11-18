const countys = require('../../service/county/county.json');

const binary_search_county = county_name => {
  let min_index = 0;
  let max_index = countys.length;

  const index_mean = () => ~~((min_index + max_index)/2);
  
  while(min_index < max_index - 1){
    let mean = index_mean();
    let current_county_name = countys[mean].name;

    if(current_county_name === county_name)
      return countys[mean];

    if(current_county_name > county_name)
      max_index = mean;

    else
      min_index = mean;
  }
      
  return { error: 'Estado não encontrado!' };
}


const getCounty = county_name => {
  return binary_search_county(county_name);
}

(() => {


  const resultado = getCounty('Curitiba');

  if(resultado.error)
    console.log("Vish filhão");
  console.log(resultado);

})();