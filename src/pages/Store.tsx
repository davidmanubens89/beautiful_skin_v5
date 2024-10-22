import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import StoreProductCard from '../components/StoreProductCard';

export const Store: React.FC = () => {
  const { wishlist } = useWishlist();

  const categories = [
    { name: "Cleansers", image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
    { name: "Moisturizers", image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
    { name: "Serums", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
    { name: "Sunscreens", image: "https://images.unsplash.com/photo-1526758097130-bab247274f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
    { name: "Exfoliators", image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
    { name: "Night Creams", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
  ];

  const products = [
    {
      id: 1,
      name: "Gentle Foaming Cleanser",
      brand: "SkinScience",
      price: 24.99,
      originalPrice: 29.99,
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      name: "Hydrating Toner",
      brand: "SkinScience",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      name: "Vitamin C Serum",
      brand: "SkinScience",
      price: 59.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
    },
    {
      id: 4,
      name: "Niacinamide Moisturizer",
      brand: "SkinScience",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const wishlistProducts = products.filter(product => wishlist.includes(product.name));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">SkinScience Store</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skin Care Product Categories</h2>
        <div className="flex justify-between items-center space-x-4 overflow-x-auto pb-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="w-24 h-24 rounded-full bg-cover bg-center mb-2"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <span className="text-sm font-medium text-gray-700 text-center">{category.name}</span>
            </div>
          ))}
        </div>
      </section>
      
      {wishlistProducts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Wishlist</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistProducts.map((product) => (
              <StoreProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
      
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">All Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <StoreProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Store;