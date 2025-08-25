document.getElementById('byline').innerHTML = "Web Strategy & UX ⸱ Pianist";
document.getElementById('byline').innerHTML = `<p>Web Strategy & UX<br />Pianist</p>`;

document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('menu-toggle').checked = false;
});

function updateByLine() {
  const byline = document.getElementById('byline');
  const isSmallScreen = window.matchMedia('(max-width: 555px)').matches;

  if (isSmallScreen) {
    byline.innerHTML = `<p>Web Strategy & UX<br />Pianist</p>`;
  } else {
    byline.innerHTML = "Web Strategy & UX ⸱ Pianist";
  }
}

updateByLine();

window.addEventListener('resize', updateByLine);