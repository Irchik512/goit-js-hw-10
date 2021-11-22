import countryMarkup from '../template/country.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';

export default function creteMarkup(arr) {
  if (arr.length === 1) {
    refs.div.innerHTML = countryMarkup(arr[0]);
  }
  if (arr.length > 2 && arr.length <= 10) {
    const markup = arr
      .map(
        ({ name, flags: { svg } }) =>
          `<li class="countries-item">
          <img width="30" height="20" src="${svg}" alt="Flag"/>
          <p>${name.official}</p>
        </li>`,
      )
      .join('');
    refs.ul.innerHTML = markup;
  }
  if (arr.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  }
}
