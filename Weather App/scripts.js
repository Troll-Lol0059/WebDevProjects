// Required Elements
const userWeatherTab = document.querySelector("#userWeatherTab");
const searchWeatherTab = document.querySelector("#searchWeatherTab");

// -- Frames --
const searchCityFrame = document.querySelector("[data-searchWeatherFormContainer]");
const locationPermissionFrame = document.querySelector("[data-locationTakerFrame]");
const userWeatherFrame = document.querySelector("[data-userWeatherDisplayContainer]");
const cityNotFoundFrame = document.querySelector("[data-cityNotFound]");
const loader = document.querySelector("[data-pageLoader]");

// Grant Access Button
const grantAccessButton = document.querySelector("#locationTakerButton")

// User Frame Data Div's
var userCity = document.querySelector(".userCityName");
var userCountryFlag = document.querySelector(".userCountryFlag");
var userWeather = document.querySelector(".userWeather");
var weatherImage = document.querySelector(".imageAccordingToWeather");
var userTemperature = document.querySelector(".temperature");
var userWindspeedData = document.querySelector("#userWindspeedData");
var userHumidityData = document.querySelector("#userHumidityData");
var userCloudData = document.querySelector("#userCloudData");


// Search City Weather Input tab & Button
searchCityBox = document.querySelector("#searchCity");
searchCityButton = document.querySelector(".searchButtonDiv");

// Required Variables
var API_KEY ="8d391f28f5d942fda08150321230508";

// -- Default Case Scenario ---
let currentTab = userWeatherTab;
currentTab.classList.add("tabStyle");

if(sessionStorage.getItem("userLattitude") !== null &&
sessionStorage.getItem("userLongitude") !== null ){
    locationPermissionFrame.classList.remove("active"); 
    getUserWeather();
    openUserWeatherFrame();
    displayUserData();
}
else{
    locationPermissionFrame.classList.add("active"); 
}

// getUserLocation();

// this function opens city search Frame
function openSearchFrame(){
    cityNotFoundFrame.classList.remove("active");
    locationPermissionFrame.classList.remove("active");
    userWeatherFrame.classList.remove("active");
    searchCityFrame.classList.add("active");
}

function openLocationPermissionFrame(){
    cityNotFoundFrame.classList.remove("active");
    userWeatherFrame.classList.remove("active");
    searchCityFrame.classList.remove("active");
    locationPermissionFrame.classList.add("active");
}

function openUserWeatherFrame(){
    cityNotFoundFrame.classList.remove("active");
    locationPermissionFrame.classList.remove("active");
    searchCityFrame.classList.remove("active");
    userWeatherFrame.classList.add("active");
}

function switchTab(currentTab){
    if(currentTab !== userWeatherTab){
        userWeatherTab.classList.remove("tabStyle");
        searchWeatherTab.classList.add("tabStyle");
        openSearchFrame();
    }
    else{
        if(sessionStorage.getItem("userLattitude") === null &&
        sessionStorage.getItem("userLongitude") === null ){
            searchWeatherTab.classList.remove("tabStyle");
            userWeatherTab.classList.add("tabStyle");
            openLocationPermissionFrame();
        }
        else{
            locationPermissionFrame.classList.remove("active"); 
            searchWeatherTab.classList.remove("tabStyle");
            userWeatherTab.classList.add("tabStyle");
            openUserWeatherFrame();
            displayUserData();
        }
    }
}

// this function takes user lattitude & longitude
function getUserLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            let userLattitude = position.coords.latitude;
            let userLongitude = position.coords.longitude;
            const lattitude = JSON.parse(userLattitude);
            const longitude = JSON.parse(userLongitude);

            sessionStorage.setItem("userLattitude",lattitude);
            sessionStorage.setItem("userLongitude",longitude);
        })
    }
}

// get weather info with Lattitude & Longitude
async function getUserWeather(){
    let userLattitude = sessionStorage.getItem("userLattitude");
    let userLongitude = sessionStorage.getItem("userLongitude");

    try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8d391f28f5d942fda08150321230508&q=${userLattitude},${userLongitude}&aqi=no`);
        const result = await response.json();
        return result;
    }
    catch(e){
        console.log("Error aaye hai !!!" + e);
    }
}

// this function displays user tab data's
function displayUserData(){
    getUserLocation();
    getUserWeather();
    getUserWeather().then((data)=>{
        setWeatherDetails(data);
    })
}

function cityNotFound(){
    userWeatherFrame.classList.remove("active");
    cityNotFoundFrame.classList.add("active");
}

function showLoader(state=0){
    if(state===1){
        cityNotFoundFrame.classList.remove("active");
        userWeatherFrame.classList.remove("active");
        loader.classList.add("active");
    }
    else{
        loader.classList.remove("active");
    }   
}

async function getCityWeather(){
    let cityName = getCityName();
    try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8d391f28f5d942fda08150321230508&q=${cityName}`);

        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const cityWeather = await response.json();
        return cityWeather;
    }
    catch(e){
        cityNotFound();
        return;   
    }
}

function getCityName(){
    let city = searchCityBox.value;
    if(city ===""){
        return;
    }else{
        return city;
    }
}

function setWeatherDetails(data){
    userCity.innerHTML = data?.location?.name;
    userWeather.innerHTML = data?.current?.condition?.text;
    userTemperature.innerHTML = data?.current?.temp_c + " ºC";
    userWindspeedData.innerHTML = data?.current?.wind_kph + " Km/Hour";
    userHumidityData.innerHTML = data?.current?.humidity + " %";
    userCloudData.innerHTML = data?.current?.cloud + " %";
    weatherImage.src = data?.current?.condition?.icon;
}

async function displayCityWeather(){
    const cityWeather = await getCityWeather();
    await openUserWeatherFrame();
    setWeatherDetails(cityWeather);
}

userWeatherTab.addEventListener('click',() =>{
    currentTab = userWeatherTab;
    switchTab(currentTab);
})

searchWeatherTab.addEventListener('click',()=>{
    currentTab = searchWeatherTab;
    switchTab(currentTab);
})


grantAccessButton.addEventListener('click',()=>{
    getUserLocation();
    getUserWeather();
    openUserWeatherFrame();
    displayUserData();
})


searchCityButton.addEventListener('click',()=>{
    displayCityWeather();
})

searchCityBox.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    searchCityButton.click();
  }
});

getUserLocation();
















