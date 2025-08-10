document.getElementById('byline').innerHTML = "UX Designer Who Codes | Creative Professional | Pianist";
document.getElementById('byline').innerHTML = `<p>UX Designer Who Codes<br />Creative Professional<br />Pianist</p>`;

document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('menu-toggle').checked = false;
});

function updateByLine() {
  const byline = document.getElementById('byline');
  const isSmallScreen = window.matchMedia('(max-width: 555px)').matches;

  if (isSmallScreen) {
    byline.innerHTML = `<p>UX Designer Who Codes<br />Creative Professional<br />Pianist</p>`;
  } else {
    byline.innerHTML = "UX Designer Who Codes | Creative Professional | Pianist";
  }
}

updateByLine();

window.addEventListener('resize', updateByLine);