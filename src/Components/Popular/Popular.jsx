import React, { useState, useEffect } from "react";
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
    const itemsPerPage = 4; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(0); // Current page index
    const pageCount = Math.ceil(data_product.length / itemsPerPage); // Calculate total number of pages

    useEffect(() => {
        const handlePageTransition = () => {
            setCurrentPage(currentPage === pageCount - 1 ? 0 : currentPage + 1);
        };
    
        const timer = setTimeout(() => {
            handlePageTransition();
        }, 2000); // Transition after 5 seconds
    
        // Clear the timer when the component unmounts or the currentPage changes
        return () => clearTimeout(timer);
    }, [currentPage, pageCount, setCurrentPage]); // eslint-disable-line no-unused-vars
    
    
    
    
    // Function to handle page click
    const handlePageClick = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    // Slice the items based on the current page index and items per page
    const displayedItems = data_product.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return (
        <div className="popular">
            <h1>MOST SOLD ITEMS</h1>
            <hr/>
            <div className="popular-item">
                {displayedItems.map((item, index) => (
                    <Item
                        key={index}
                        image={item.image}
                        // name={item.name}
                        // new_price={item.new_price}
                        // old_price={item.old_price}
                    />
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: pageCount }, (_, index) => (
                    <span
                        key={index}
                        className={index === currentPage ? "dot active" : "dot"}
                        onClick={() => handlePageClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Popular;
