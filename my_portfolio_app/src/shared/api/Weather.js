/* eslint-disable unicorn/filename-case */
export const getWeatherByCity = (city) => {
  const API_KEY = '62ebf35fec4dc63520f722f76400fdf0';
  return appFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
};

export const appFetch = async (method, url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json().then((data) => data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
