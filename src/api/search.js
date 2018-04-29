import { post } from './request';

// TODO: put env-var
export const search = (text, startDate, endDate) => {
  const endpoint = 'https://backend-bbb.herokuapp.com/search/by-domain';
  return post(endpoint, { query: text, startDate, endDate });
};
