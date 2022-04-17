let profileReviews = [
    {
        name : "albert",
        job : "system admin",
        review : "je m'appelle albert"   
    },
    {
        name : "bernard",
        job : "ux designer",
        review : "je m'appelle bernard"   
    }, 
    {
        name : "caroline",
        job : "lead dev",
        review : "je m'appelle caroline"   
    }, 
    {
        name : "dany",
        job : "mother of dragon",
        review : "je m'appelle dany"
    }, 
    {
        name : "erin",
        job: "nuts",
        review: "je m'appelle erin"
     }
];
let currentProfile = 0;

const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');
const randomBtn = document.getElementById('random-review');
const profileName = document.getElementById('profile-name');
const profileJob = document.getElementById('profile-job');
const profileReview = document.getElementById('profile-review');

function changeReview(profileNumber){
profileName.innerText = profileReviews[profileNumber].name;
profileJob.innerText = profileReviews[profileNumber].job;
profileReview.innerText = profileReviews[profileNumber].review;
}

function random(){
    let randomProfile = Math.floor( Math.random() * profileReviews.length);
    while ( currentProfile == randomProfile){
        randomProfile = Math.floor( Math.random() * profileReviews.length);
    }
    currentProfile = randomProfile
    changeReview(currentProfile);
}
let leftProfile = () => {
    if ( currentProfile == 0 ){
        currentProfile = profileReviews.length - 1;
        changeReview(currentProfile);
    }
    else {
        currentProfile--;
        changeReview(currentProfile)
    }
}
let rightProfile = () => {
    console.log(currentProfile);
    if ( currentProfile == profileReviews.length-1){
        currentProfile = 0;
        changeReview(currentProfile);
    }
    else {
        currentProfile++;
        changeReview(currentProfile)
    }
}
random();
leftArrow.addEventListener('click', leftProfile);
rightArrow.addEventListener('click', rightProfile);
