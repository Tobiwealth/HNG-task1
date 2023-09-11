document.addEventListener('DOMContentLoaded', function() {
    const slackUserName = document.querySelector('[data-testid="slackUserName"]');
    const slackDisplayImage = document.querySelector('[data-testid="slackDisplayImage"]');
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
    const myTrack = document.querySelector('[data-testid="myTrack"]');
    const githubURL = document.querySelector('[data-testid="githubURL"]');


    slackUserName.textContent = "Tobi";
    slackDisplayImage.src = "./icon.jpg";
    slackDisplayImage.alt = "Tobi";
    currentDayOfTheWeek.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    currentUTCTime.textContent = Date.now();
    myTrack.textContent = "Frontend";
    githubURL.href = "https://github.com/Tobiwealth/HNG-task1";
    githubURL.textContent = "GitHub Repository";
});