import React from 'react';

const Products = () => {
    return (
        <div id="products" className="py-6 px-4 mt-9 mb-4 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Products</h1>
            <div className="product-list">
                <ul className="list-disc list-inside mb-8 space-y-2 text-lg text-gray-700">
                    <li className="hover:text-green-500 transition-colors duration-300">Product 1</li>
                    <li className="hover:text-green-500 transition-colors duration-300">Product 2</li>
                    <li className="hover:text-green-500 transition-colors duration-300">Product 3</li>
                    <li className="hover:text-green-500 transition-colors duration-300">Product 4</li>
                    <li className="hover:text-green-500 transition-colors duration-300">Product 5</li>
                </ul>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Products Page</h2>
            <p className="text-gray-600 text-lg">This is the Products Page</p>
        </div>
    );
}

export default Products;


