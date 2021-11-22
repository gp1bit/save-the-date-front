export const getToken = (): string => {
  const cookies = document.cookie;
  const authString = cookies
    .split(';')
    .filter((element) => element.includes('Authorization'))[0];
  return authString?.replace('Authorization=', '') || '';
};

export const setToken = (token: string) => {
  document.cookie = `Authorization=${token};`;
};

export const fetchInit = (method: string, body?: any): RequestInit => {
  const token = getToken();
  const init: RequestInit = {
    method: method,
    mode: 'cors',
  };
  if (token) Object.assign(init, { Authorization: `Bearer ${token}` });
  if (body) Object.assign(init, { body });
  return init;
};
