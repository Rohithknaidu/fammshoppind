import React from "react";
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
    //console.log(data_product); // Move the console.log statement here to log the data_product array

    return (
        <div className="popular">
            <h1>MOST SOLD ITEMS</h1>
            <hr/>
            <div className="popular-item">
                {data_product.map((item, index) => (
                    <Item
                        image={item.image}
                        name={item.name}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Popular;
