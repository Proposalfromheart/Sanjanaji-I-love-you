const audio = new Audio('music.mp3');

// Try to play audio when the page loads
window.addEventListener('load', () => {
  audio.play().catch(error => {
    console.log('Autoplay failed. Waiting for user interaction.');
    // Add an event listener to start audio after the first user interaction
    document.body.addEventListener('click', () => {
      audio.play();
    }, { once: true }); // Ensures the event listener is only used once
  });
});