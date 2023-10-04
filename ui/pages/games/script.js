const iframeContainer = document.getElementById('iframe-container');
const websiteIframe = document.getElementById('website-iframe');
const searchInput = document.getElementById('search-input');
const searchSubmitBtn = document.getElementById('search-submit');
const searchBarContainer = document.getElementById('search-bar-container');
const recommendedSites = document.getElementById('recommended-sites');

// Function to load a website in the IFrame
function loadWebsite(url) {
  websiteIframe.src = url;
  iframeContainer.style.display = 'flex';
  searchBarContainer.style.display = 'none';
}

// Add click event listeners to the recommended site list items
recommendedSites.querySelectorAll('li').forEach((site) => {
  site.addEventListener('click', function () {
    const url = this.getAttribute('data-url');
    loadWebsite(url);
  });
});

searchSubmitBtn.addEventListener('click', function () {
  const url = searchInput.value;
  if (url) {
    loadWebsite(url);
  }
});

// Event listener for Enter key in the search input field
searchInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const url = searchInput.value;
    if (url) {
      loadWebsite(url);
    }
  }
});

// Warn the user before closing the page
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = '';
});
