import React from 'react';

const Portfolio = () => {
    return (
        <div id="portfolio" className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Portfolio</h1>
            <ul className="list-disc list-inside mb-8 space-y-2 text-lg text-gray-700">
                <li className="hover:text-blue-500 transition-colors duration-300">Portfolio Item 1</li>
                <li className="hover:text-blue-500 transition-colors duration-300">Portfolio Item 2</li>
                <li className="hover:text-blue-500 transition-colors duration-300">Portfolio Item 3</li>
                <li className="hover:text-blue-500 transition-colors duration-300">Portfolio Item 4</li>
                <li className="hover:text-blue-500 transition-colors duration-300">Portfolio Item 5</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Portfolio Page</h2>
            <p className="text-gray-600 text-lg">This is the Portfolio Page</p>
        </div>
    );
}

export default Portfolio;


// import React from 'react';


// const Portfolio = () => {
//      return (
//         <div>
//             <h1>Portfolio</h1>
//             <ul>
//                 <li>Portfolio Item 1</li>
//                 <li>Portfolio Item 2</li>
//                 <li>Portfolio Item 3</li>
//                 <li>Portfolio Item 4</li>
//                 <li>Portfolio Item 5</li>
//             </ul>
//             <h2>Portfolio Page</h2>
//             <p>This is the Portfolio Page</p>
//         </div>
//     );
// }


// export default Portfolio;