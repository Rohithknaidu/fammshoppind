import React, { useContext } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import { FaChevronDown } from 'react-icons/fa'; // Importing the dropdown icon
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    return (
        <div className="shop-category">
            <img src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>showing 1-6</span> out of 20 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <FaChevronDown /> {/* Using the dropdown icon */}
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return (
                            <Item
                                key={i}
                                image={item.image}
                                name={item.name}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default ShopCategory;
