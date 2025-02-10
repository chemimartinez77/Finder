document.addEventListener('DOMContentLoaded', () => {
    startGame();
});

function startGame() {
    StoryManager.loadInitialScene();
}

window.onload = () => {
    const locationImage = document.getElementById('location-image');
    console.log('Location Image:', locationImage);
    console.log('Background:', window.getComputedStyle(locationImage).backgroundImage);
};