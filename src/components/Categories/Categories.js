import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

import './Categories.css';



const Categories = () => {
  const categories = [
    {
      category: "smartphones",
      image: "images/smartphones.jpg",
      name: "Smartphones",
    },
    { category: "laptops", image: "images/laptops.jpg", name: "laptops" },
    {
      category: "fragrances",
      image: "images/fragrances.jpg",
      name: "Fragrances",
    },
    { category: "skincare", image: "images/skincare.jpg", name: "skincare" },
    { category: "groceries", image: "images/groceries.jpg", name: "groceries" },
    {
      category: "home-decoration",
      image: "images/home-decoration.jpg",
      name: "Home Decoration",
    },
    { category: "furniture", image: "images/furniture.jpg", name: "furniture" },
    { category: "tops", image: "images/tops.jpg", name: "tops" },
    {
      category: "womens-dresses",
      image: "images/dresses.jpg",
      name: "Dresses",
    },
    {
      category: "womens-shoes",
      image: "images/womens-shoes.jpg",
      name: "Women' Shoes",
    },
    {
      category: "mens-shirts",
      image: "images/mens-shirts.jpg",
      name: "Men's Shirts",
    },
    {
      category: "mens-shoes",
      image: "images/mens-shoes.jpg",
      name: "Men's Shoes",
    },
    {
      category: "mens-watches",
      image: "images/mens-watches.jpg",
      name: "Men's Watches",
    },
    {
      category: "womens-watches",
      image: "images/womens-watches.jpg",
      name: "Women's Watches",
    },
    {
      category: "womens-bags",
      image: "images/womens-bags.jpg",
      name: "Women's Bags",
    },
    {
      category: "womens-jewellery",
      image: "images/womens-jewellery.jpg",
      name: "Women's Jewellery",
    },
    {
      category: "sunglasses",
      image: "images/sunglasses.jpg",
      name: "Sunglasses",
    },
    {
      category: "automotive",
      image: "images/automotive.jpg",
      name: "Automotive",
    },
    {
      category: "motorcycle",
      image: "images/motorcycle.jpg",
      name: "Motorcycle",
    },
    {
      category: "lighting",
      image: "images/lighting.jpg",
      name: "Lighting",
    },
  ];
  return (
    <div className = "categories">
      <h1 className = 'section-title'>Categories</h1>
      <div className = "categories-list">

          {categories.map(cat => {
              return (<CategoryCard category = {cat} key = {cat.category}></CategoryCard>);
          })}
      </div>
    </div>

  );
};

export default Categories;
