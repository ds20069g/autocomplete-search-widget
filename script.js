// Get the search input and search results elements from the DOM
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Listen for keyup events on the search input
searchInput.addEventListener('keyup', async () => {
  try {
    const query = searchInput.value.trim();
   
    // If the query is too short, clear the search results and return
    if (query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }

    // Fetch search results from the server using the proxy.php script
    const response = await fetch(`/php/public/index.php?q=${query}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

   
    const data = await response.json();

    searchResults.innerHTML = '';

    // Iterate over each comment in the data and add it to the search results list
    data.forEach(comment => {
      const li = document.createElement('li');
      li.textContent = comment.name;
      searchResults.appendChild(li);
    });
  } catch (error) {
    console.error('An error occurred while searching:', error);
    searchResults.innerHTML = '<li class="error">An error occurred while searching. Please try again later.</li>';
  }
});
