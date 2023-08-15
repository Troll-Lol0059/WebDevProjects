// fetching required elements
var inputUsername = document.querySelector(".inputUsername");
const searchButton = document.querySelector(".searchButton");
var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];

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



// required variables
const url = 'https://api.github.com/users/';
const mode = ["light","dark"];
var pageMode = "";

// Default Case
function init(){
    inputUsername.value = "";
    pageMode = mode[0];
    loadProfile("Troll-Lol0059");
}

// functions

// function to get User Data From Github
async function fetchData(username){
    let response = await fetch(url+username);
    let data = await response.json();
    return data;
}

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

function setUserData(data){
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

function loadProfile(username){
    fetchData(username).then((data)=>{
        setUserData(data);
    })
}




// Event Listeners
searchButton.addEventListener("click",()=>{
        // function
})

inputUsername.addEventListener('keyup', (event)=> {
    if (event.keyCode === 13) {
        // function
      console.log("Activated !!");
    }
});

init();

