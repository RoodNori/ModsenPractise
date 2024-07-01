const express = require("express");

const app = express();
const WEATHER_API_TOKEN = "d8ae03d237fa1e4a94aa2e3b69c5274c";

async function getWeatherByCity(
  city,
  options = null,
  token = WEATHER_API_TOKEN
) {
  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  URL += token ? `&appid=${token}` : "";

  try {
    let res = await fetch(URL, options);

    return { status: res.status, json: await res.json() };
  } catch (err) {
    throw new Error("OpenWeather недоступен");
  }
}

app.get("/200", (req, res) => {
  getWeatherByCity("minsk")
    .then((resAPI) => {
      res.statusCode = resAPI.status;
      res.json(JSON.stringify(resAPI.json));
    })
    .catch((err) => {
      res.end(err.message);
    });
});

app.get("/400", (req, res) => {
  (async () => {
    let URL = `https://api.openweathermap.org/data/2.5/weather?qa=minsk&units=metric&appid=${WEATHER_API_TOKEN}`;

    try {
      let res = await fetch(URL);

      return { status: res.status, json: await res.json() };
    } catch (err) {
      throw new Error("OpenWeather недоступен");
    }
  })()
    .then((resAPI) => {
      res.statusCode = resAPI.status;
      res.json(JSON.stringify(resAPI.json));
    })
    .catch((err) => res.end(err.message));
});

app.get("/401", (req, res) => {
  getWeatherByCity("minsk", null, null)
    .then((resAPI) => {
      res.statusCode = resAPI.status;
      res.json(JSON.stringify(resAPI.json));
    })
    .catch((err) => res.end(err.message));
});

app.get("/404", (req, res) => {
  getWeatherByCity("mnsk")
    .then((resAPI) => {
      res.statusCode = resAPI.status;
      res.json(JSON.stringify(resAPI.json));
    })
    .catch((err) => res.end(err.message));
});

app.get("/405", (req, res) => {
  getWeatherByCity("minsk", {
    method: "OPTIONS",
  })
    .then((resAPI) => {
      res.statusCode = resAPI.status;
      res.json(JSON.stringify(resAPI.json));
    })
    .catch((err) => res.end(err.message));
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
