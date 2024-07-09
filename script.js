// script.js
document.addEventListener('DOMContentLoaded', function() {
    const catalogContainer = document.getElementById('catalogContainer');

    // Sample product data (replace with your actual product data)
    const products = [
        { name: 'Monthly Budget Planner', description: 'Track income, expenses, and savings.', features: 'Income tracking, Expense tracking', price: '$10', link: 'Link to Buy' },
        { name: 'Cash Flow Statement', description: 'Monitor cash flow in and out of the business.', features: 'Cash inflow, Cash outflow', price: '$15', link: 'Link to Buy' },
        // Add more products as needed
    ];

    // Function to create a product card
    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card');
        
        card.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p><strong>Features:</strong> ${product.features}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <a href="#">${product.link}</a>
        `;
        
        catalogContainer.appendChild(card);
    }

    // Populate catalog with product cards
    products.forEach(product => {
        createProductCard(product);
    });
});
