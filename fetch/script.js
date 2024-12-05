function f1() {
    const query = document.getElementById('searchInput').value.trim();


    if (!query) {
        alert('Please enter a search term');
        return;
    }

    
    fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
        
            console.log('Search Results:', data.products);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
