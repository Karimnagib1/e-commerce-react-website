import {React, useEffect} from 'react';
import {Link} from 'react-router-dom';

import './CategoryCard.css';

const CategoryCard = (props) => {
    useEffect(() => {
        const card = document.getElementById(props.category.category);
        card.style.backgroundImage = `url(" ${props.category.image}")`;
    });
    return (
        <Link to= {`/products/${props.category.category}`} >
            <div className = "category-card" id = {props.category.category}>
                <h2>{props.category.name}</h2>
            </div>
        </Link>
    );
};

export default CategoryCard;