const getAllData = async () => {
  const weather = await getWeather();
  const data = {
    weather
  };
  return data;
}

const getWeather = async () => {
  const response = await fetch('/api/weather');
  const data = await response.json();
  return data;
}