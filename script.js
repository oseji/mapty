"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

//CODE

//Geo-location API
navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude, longitude } = position.coords;
    console.log(`https://www.google.ng/maps/@${latitude},${longitude}`);

    const locationData = [latitude, longitude];
    const map = L.map("map").setView(locationData, 13);

    //map view
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    //map onclick function
    map.on("click", function (mapEvent) {
      const { lat, lng } = mapEvent.latlng;

      L.marker([lat, lng], { opacity: 0.75 })
        .addTo(map)
        .bindPopup(`Workout.`)
        .openPopup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: "running-popup",
        });
    });
  },
  function () {
    console.log("Failed to get location");
  }
);
