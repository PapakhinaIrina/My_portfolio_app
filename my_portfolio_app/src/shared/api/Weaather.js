export const getWeatherByCity = (city) => {
  const API_KEY = '62ebf35fec4dc63520f722f76400fdf0';
  return appFetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
};

export const appFetch = (method, url, options) => {
  return fetch(url, options)
    .then((resp) => resp.json())
    .catch((error) => {
      throw new Error(error);
    });
};
