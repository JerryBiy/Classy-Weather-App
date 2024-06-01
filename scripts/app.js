const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = data => {

    const {cityDets, weather} = data;

    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

}



const updateCity = async cityName => {

    const cityDets = await getCity(cityName);
    const weather = await getWeather(cityDets.Key);

    return { cityDets, weather };
}


cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const cityName = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(cityName)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

})