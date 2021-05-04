import axios from 'axios';
import md5 from 'md5';
import { stringifyUrl } from 'query-string';

const API_URL = process.env.REACT_APP_MARVEL_API_BASE;
const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

export const fetchApi = async (resource = '') => {
  const ts = new Date().getTime();
  const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`);
  const url = `${API_URL}/${resource}`;
  const uri = stringifyUrl({
    url: url,
    query: {
      ts: ts,
      apikey: PUBLIC_KEY,
      hash: hash,
    },
  });
  return axios.get(uri);
};
