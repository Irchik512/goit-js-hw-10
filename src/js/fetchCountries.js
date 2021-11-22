const BASE_URL = 'https://restcountries.com/v3.1';

export function fetchCountries(name) {
  return fetch(`${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
      throw Error('Oops, there is no countries with that name');
    })
    .then(console.log());
}
