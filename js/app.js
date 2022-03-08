// c10778e4099edc413bae5be778c2dd6d
const apiKey = `c10778e4099edc413bae5be778c2dd6d`;

// console.log(name);

const  searchTemperature = () => {
    // console.log(apiKey);
    const name = document.getElementById('cityName');
    const nameValue = name.value;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${nameValue}&appid=${apiKey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => dataJSON(data))
    name.value = "";
}

const dataJSON = datas => {
    for(const data of datas){
        console.log(data.lat);
        document.getElementById('city').innerText = data.name;
        document.getElementById('temperature').innerText = data.lat;
    }
}