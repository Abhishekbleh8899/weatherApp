const apikey = "f7b12e412e63e255456a1c098f5cdc93";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
// console.log(searchBox);
async function checkWeather(city){
    var response = '';
    if(city===undefined) {
        response =await fetch(apiurl + 'delhi' +`&appid=${apikey}`);
    }
    else {
    response =await fetch(apiurl + city +`&appid=${apikey}`);
    }
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/H";


 }
searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})
checkWeather();







