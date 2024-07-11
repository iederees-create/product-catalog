document.addEventListener('DOMContentLoaded', function() {
    const catalogContainer = document.getElementById('catalogContainer');

    // Product data
    const products = [
        { name: 'Monthly Budget Planner', description: 'Track income, expenses, and savings.', features: 'Income tracking, Expense tracking', price: '$10' },
        { name: 'Cash Flow Statement', description: 'Monitor cash flow in and out of the business.', features: 'Cash inflow, Cash outflow', price: '$15' },
        { name: 'Expense Tracker', description: 'Simple and accessible way to track daily expenses.', features: 'Expense logging, Categories, Summaries', price: '$8' },
        { name: 'Sales and Revenue Tracker', description: 'Track sales performance and revenue over time.', features: 'Sales logging, Revenue tracking, Trend analysis', price: '$12' },
        { name: 'Project Management Dashboard', description: 'Manage and track project progress, deadlines, and tasks.', features: 'Task tracking, Deadline management, Progress visualization', price: '$20' },
        { name: 'KPI Dashboard', description: 'Visual dashboard to track key performance indicators (KPIs) and metrics.', features: 'KPI visualization, Metrics tracking, Trend analysis', price: '$18' },
        { name: 'Inventory Management Template', description: 'Track inventory levels, purchases, and sales.', features: 'Stock levels, Purchases, Sales, Alerts for low stock', price: '$14' },
        { name: 'Marketing Campaign Tracker', description: 'Plan, execute, and track marketing campaigns.', features: 'Campaign planning, Performance tracking, Analytics', price: '$16' },
        { name: 'CRM Template', description: 'Manage customer information, interactions, and sales pipelines.', features: 'Customer data, Interaction logging, Sales pipeline', price: '$22' },
        { name: 'Employee Timesheet Template', description: 'Log working hours and manage payroll.', features: 'Hour logging, Overtime calculation, Payroll management', price: '$10' },
        
        // New products based on courses
        { name: 'Data Monetization Strategy Development', description: 'Consulting service to develop data monetization strategies.', features: 'Strategy development, Business insights, Data valuation', price: '$50' },
        { name: 'Advanced Data Analysis', description: 'In-depth data analysis services for strategic business insights.', features: 'Data cleaning, Data visualization, Insight generation', price: '$40' },
        { name: 'Custom Data Science Solutions', description: 'Development of tailored data-driven solutions using Python.', features: 'Data modeling, Machine learning, Automation', price: '$60' },
        { name: 'Responsive Web Development', description: 'Creating responsive and interactive websites.', features: 'HTML5, CSS3, JavaScript, Mobile-friendly', price: '$30' },
        { name: 'Technical Analysis for Trading', description: 'Applying technical analysis techniques to enhance trading strategies.', features: 'Chart pattern analysis, Momentum indicators, Trading signals', price: '$45' },
        
        // Further breakdown of new products
        { name: 'Data Cleaning Service', description: 'Cleaning and preparing data for analysis.', features: 'Data formatting, Handling missing values, Data normalization', price: '$20' },
        { name: 'Data Visualization Reports', description: 'Creating visual reports for data insights.', features: 'Charts and graphs, Interactive dashboards, Custom visualizations', price: '$25' },
        { name: 'Machine Learning Model Development', description: 'Developing machine learning models for various applications.', features: 'Model training, Evaluation, Deployment', price: '$70' },
        { name: 'E-commerce Website Development', description: 'Developing full-featured e-commerce websites.', features: 'Product listings, Shopping cart, Payment integration', price: '$100' },
        { name: 'SEO Optimization', description: 'Improving website visibility on search engines.', features: 'Keyword research, On-page SEO, Technical SEO', price: '$35' },
        { name: 'Trading Signal Generation', description: 'Generating buy and sell signals using technical analysis.', features: 'Signal generation, Backtesting, Performance evaluation', price: '$55' }
    ];

    // Function to create a product card
    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card');
        
        const whatsappLink = `https://wa.me/27845272182?text=I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}%20product.%20Description:%20${encodeURIComponent(product.description)}`;

        card.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p><strong>Features:</strong> ${product.features}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <a href="${whatsappLink}" target="_blank">Buy Now</a>
        `;
        
        catalogContainer.appendChild(card);
    }

    // Populate catalog with product cards
    products.forEach(product => {
        createProductCard(product);
    });
});
