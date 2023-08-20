import React, { useState } from 'react';
import Category from './Category';
import ProductCard from './Product';

import TShirt from '../images/pic-1.jpeg';
import Dumbell from '../images/dumbell.webp';
import YogaMat from '../images/yoga-mat.webp';
import Protein from '../images/protein.webp';

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    // Sample data - you can replace this with real data from your API
    { id: 1, category: 'gym equipments', name: 'Dumbbell', price: '₹450', imageUrl: Dumbell },
    { id: 4, category: 'proteins', name: 'Casein Protein', price: '₹399', imageUrl: Protein },
    { id: 5, category: 'sports wear', name: 'T-Shirt', price: '₹450', imageUrl: TShirt },
    { id: 6, category: 'yoga mats', name: 'Mat', price: '₹150', imageUrl: YogaMat}
    // ... Add more sample products
  ];
//   const handleBuy = (product) => {
//     // You can implement the logic for purchasing the product here.
//     // For example, you can show a confirmation dialog or add the product to a shopping cart.
//     console.log(`Buying ${product.name}`);
//   };
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div style={{ display: 'flex' }}>
      <Category setSelectedCategory={setSelectedCategory} />
      <div style={{ flex: 1, padding: '20px' }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        
      </div>
      
    </div>
  );
};

export default Marketplace;
