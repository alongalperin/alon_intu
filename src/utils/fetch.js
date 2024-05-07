import { URL } from './constants';

export const loadData = async () => {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    return data.products;
  } catch (err) {
    throw new Error(`Error on fetch products ${err}`);
  }
};
