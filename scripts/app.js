const cityForm = document.querySelector('form');

const updateCity = async cityName => {

    const cityDets = await getCity(cityNmae);
    const weather = await getWeather(cityDets.Key);

    return {
        cityDets : cityDets,
        weather : weather
    }
}


cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const cityName = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(cityName)
    .then(data => )
    .catch(err => console.log(err));

})