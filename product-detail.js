// product-detail.js
function getProductDetails(productName) {
    // Fetch the product data from the JSON file or API
    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        const products = data.products;
        // Find the product by name or ID
        const product = products.find(p => p.name === productName);
  
        if (product) {
          // Populate the HTML template with product details
          document.getElementById('product-name').textContent = product.name;
          document.getElementById('product-description').textContent = product.description;
          document.getElementById('product-mindescription').textContent = product.mindescription;
          document.getElementById('product-price').textContent = '$' + product.price;
          document.getElementById('product-image').src = product.image;
          console.log('product.image');

        } else {
          console.log('Product not found');
        }
      })
      .catch(error => console.error('Error:', error));
  }
  
 