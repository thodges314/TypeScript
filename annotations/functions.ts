const add = (a: number, b: number): number => a + b;

const subtract = (a: number, b: number): number => a - b;

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  // can optionally return null or undefined
  console.log(message);
};

const throwError = (message: string): never => {
  // will *never* execute function completely - **rare**
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ES2015
const logWeatherEs2015 = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
};

const logWeatherEs2015Ts = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
