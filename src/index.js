import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import creteMarkup from './js/createMarkup';
import { refs } from './js/refs';
const DEBOUNCE_DELAY = 300;

refs.input.addEventListener(
  'input',
  debounce(evt => {
    const serchingCountry = evt.target.value.trim();

    if (!serchingCountry) {
      return;
    }
    refs.ul.innerHTML = '';
    refs.div.innerHTML = '';

    fetchCountries(serchingCountry)
      .then(countriesAr => {
        creteMarkup(countriesAr);
      })
      .catch(error => Notify.failure(error.message));
  }, DEBOUNCE_DELAY),
);
