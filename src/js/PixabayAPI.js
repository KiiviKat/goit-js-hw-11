import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31948994-c82329770758e332123bf6568';
export const ITEMS_PER_PAGE = 40;

export async function getSearchImage({ value, page = 1 }) {
  const options = {
    params: {
      key: API_KEY,
      q: value,
      page: page,
      per_page: ITEMS_PER_PAGE,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  const { data } = await axios.get(`${BASE_URL}`, options);
  return data;
}
