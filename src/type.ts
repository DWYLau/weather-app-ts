export interface City extends Array<Data> {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

export interface Weather {
  list: [
    {
      dt_txt: string;
      pop: number;
      main: {
        temp: number;
        feels_like: number;
        humidity: number;
      };
      weather: [
        {
          main: string;
          description: string;
        },
      ];
      wind: {
        speed: number;
        gust: number;
      };
    },
  ];
}

interface Data {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

export * as Type from "./type";
