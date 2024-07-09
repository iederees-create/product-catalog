// script.js
document.addEventListener('DOMContentLoaded', function() {
    const catalogContainer = document.getElementById('catalogContainer');

    // Product data
    const products = [
        { name: 'Monthly Budget Planner', description: 'Track income, expenses, and savings.', features: 'Income tracking, Expense tracking', price: '$10', link: '#' },
        { name: 'Cash Flow Statement', description: 'Monitor cash flow in and out of the business.', features: 'Cash inflow, Cash outflow', price: '$15', link: '#' },
        { name: 'Expense Tracker', description: 'Simple and accessible way to track daily expenses.', features: 'Expense logging, Categories, Summaries', price: '$8', link: '#' },
        { name: 'Sales and Revenue Tracker', description: 'Track sales performance and revenue over time.', features: 'Sales logging, Revenue tracking, Trend analysis', price: '$12', link: '#' },
        { name: 'Project Management Dashboard', description: 'Manage and track project progress, deadlines, and tasks.', features: 'Task tracking, Deadline management, Progress visualization', price: '$20', link: '#' },
        { name: 'KPI Dashboard', description: 'Visual dashboard to track key performance indicators (KPIs) and metrics.', features: 'KPI visualization, Metrics tracking, Trend analysis', price: '$18', link: '#' },
        { name: 'Inventory Management Template', description: 'Track inventory levels, purchases, and sales.', features: 'Stock levels, Purchases, Sales, Alerts for low stock', price: '$14', link: '#' },
        { name: 'Marketing Campaign Tracker', description: 'Plan, execute, and track marketing campaigns.', features: 'Campaign planning, Performance tracking, Analytics', price: '$16', link: '#' },
        { name: 'CRM Template', description: 'Manage customer information, interactions, and sales pipelines.', features: 'Customer data, Interaction logging, Sales pipeline', price: '$22', link: '#' },
        { name: 'Employee Timesheet Template', description: 'Log working hours and manage payroll.', features: 'Hour logging, Overtime calculation, Payroll management', price: '$10', link: '#' }
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
            <a href="${product.link}" target="_blank">Buy Now</a>
        `;
        
        catalogContainer.appendChild(card);
    }

    // Populate catalog with product cards
    products.forEach(product => {
        createProductCard(product);
    });
});
