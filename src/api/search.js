import { post } from './request';

// TODO: put env-var
export const search = (text) => {
  const endpoint = 'https://backend-bbb.herokuapp.com/search';
  return post(endpoint);
};
