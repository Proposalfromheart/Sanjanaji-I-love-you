class Paper {
  init(paper) {
    // Add an event listener for click/tap to make the paper vanish
    paper.addEventListener('click', () => {
      paper.style.transition = "opacity 0.5s ease"; // Smooth fading effect
      paper.style.opacity = 0; // Set opacity to 0 to make it vanish
      setTimeout(() => {
        paper.style.display = 'none'; // After the fade effect, set display to none to remove it from the layout
      }, 500); // Matches the transition duration
    });
  }
}

const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach(paper => {
  const p = new Paper();
  p.init(paper);
});
