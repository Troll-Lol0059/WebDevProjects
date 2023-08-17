// fetching required elements
var inputUsername = document.querySelector(".inputUsername");
const searchButton = document.querySelector(".searchButton");
var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const wrapper = document.querySelector(".wrapper");
const modeButton = document.querySelector(".modeButtonDiv");
const darkModeButton = document.querySelector(".darkModeButtonDiv");
const lightModeButton = document.querySelector(".lightModeButtonDiv");

// for setting element with data from api
var profilePic = document.querySelector(".profilePicImage");
var nameOfUser = document.querySelector(".nameOfUser");
var joiningDate = document.querySelector(".joiningDate");
var githubUserName = document.querySelector(".githubUserName");
var profileBio = document.querySelector(".profileBio");
var userRepos = document.querySelector(".userRepos");
var userFollowers = document.querySelector(".userFollowers");
var userFollowing = document.querySelector(".userFollowing");
var userLocation = document.querySelector(".userLocation");
var userWebsite = document.querySelector(".userWebsite");
var userTwitter = document.querySelector(".userTwitter");
var userCompany = document.querySelector(".userCompany");
const userNotFoundError = document.querySelector(".userNotFoundError");
const profileDisplayContainer = document.querySelector(".profileDisplayContainer");
const userNotFoundDiv = document.querySelector(".userNotFoundDiv");


// required variables
const url = 'https://api.github.com/users/';
var pageMode = "";

// Default Case
function init(){
    inputUsername.value = "";
    enableLightMode();
    pageMode = "Light";
    loadProfile("Troll-Lol0059");
}

// ----- functions of App -----

function enableLightMode(){
    wrapper.classList.remove("darkMode");
    lightModeButton.classList.remove("active");
    darkModeButton.classList.add("active");
}

// Function for Dark Mode
function enableDarkMode(){
    wrapper.classList.add("darkMode");
    darkModeButton.classList.remove("active");
    lightModeButton.classList.add("active");
}

// Function to render User Not Found Image if No users found
function userNotFound(){
    profileDisplayContainer.classList.remove("active");
    userNotFoundError.classList.add("active");
    userNotFoundDiv.classList.add("active");
}

// function to get User Data From Github
async function fetchData(username){
    try{
        let response = await fetch(url+username);
        let data = await response.json();
        return data;
    }
    catch (error) {
        throw new Error(`HTTP error! status: ${response.status}`);
  }
}

// Function to set Joining Date Beautifully
function setJoiningDate(date,monthArray){
    //  splits date only from Time & Date
    const dateArray = date.split("T");
    // split day,month & year
    const  fullDate= dateArray[0].split("-");
    let year = fullDate[0];
    let month = monthArray[fullDate[1]-1];
    let day = fullDate[2];

    // contains day,month and year in rendering format
    let finalDate = `Joined ${day} ${month} ${year}`;
    return finalDate;
}

// Function to set redering USER data from API
function setUserData(data){
    if(data.message === "Not Found"){
        userNotFound();
    }
    profilePic.src = data.avatar_url;
    nameOfUser.textContent = data.name;
    joiningDate.textContent = setJoiningDate(data.created_at,monthArray);
    githubUserName.textContent = "@" + data.login;
    profileBio.textContent = data.bio;
    userRepos.textContent = data.public_repos;
    userFollowers.textContent = data.followers;
    userFollowing.textContent = data.following;
    userLocation.textContent = data.location === null ? "Not Set" : data.location;
    userWebsite.textContent = data.html_url === null ? "Not Set": data.html_url;
    userTwitter.textContent = data.twitter_username === null ? "Not Set": data.twitter_username;
    userCompany.textContent = data.company === null ? "Not Set": data.company;
}

// Function to show set user data into UI
function loadProfile(username){
    
    fetchData(username).then((data)=>{
        profileDisplayContainer.classList.add("active");
        setUserData(data);
    })
}

// To remove user not found image from UI
function removeUserNotFound(){
    userNotFoundError.classList.remove("active");
    userNotFoundDiv.classList.remove("active");
    profileDisplayContainer.classList.add("active");
}

// Event Listeners of APP

// Search Button Listener
searchButton.addEventListener("click",()=>{
    // function
    let userName = inputUsername.value;
    removeUserNotFound();
    loadProfile(userName);
})

// Input tab binding with enter key
inputUsername.addEventListener('keyup', (event)=> {
    if (event.keyCode === 13) {
        let userName = inputUsername.value;
        removeUserNotFound();
        loadProfile(userName);
    }
});


// Mode Button Event Listeners
darkModeButton.addEventListener('click',()=>{
    enableDarkMode();
})

lightModeButton.addEventListener('click',()=>{
    enableLightMode();
})


// Default case laoder on start
init();

