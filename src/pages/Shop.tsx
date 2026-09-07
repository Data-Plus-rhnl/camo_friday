import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

export interface Product {
  id: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  isNew?: boolean;
}

export const shopProducts: Product[] = [
  {
    id: '1',
    title: 'Official #CamoFriday T-Shirt',
    price: 25.00,
    oldPrice: 30.00,
    image: '/img/product/product_1.png',
    isNew: true,
  },
  {
    id: '2',
    title: '#CamoFriday Camo Hoodie',
    price: 55.00,
    oldPrice: 65.00,
    image: '/img/product/product_2.png',
    isNew: true,
  },
  {
    id: '3',
    title: 'Awareness Embroidered Cap',
    price: 20.00,
    oldPrice: 24.00,
    image: '/img/product/product_3.png',
  },
  {
    id: '4',
    title: 'Ride for Mitch Commemorative Tee',
    price: 28.00,
    oldPrice: 35.00,
    image: '/img/product/product_4.png',
  },
  {
    id: '5',
    title: 'Camo Support Wristbands (Set of 3)',
    price: 12.00,
    oldPrice: 15.00,
    image: '/img/product/product_5.png',
    isNew: true,
  },
  {
    id: '6',
    title: 'Classic #CamoFriday Beanie',
    price: 22.00,
    oldPrice: 28.00,
    image: '/img/product/product_6.png',
  },
  {
    id: '7',
    title: 'Supporter Stainless Water Bottle',
    price: 30.00,
    image: '/img/product/product_7.png',
  },
  {
    id: '8',
    title: 'Foundation Canvas Tote Bag',
    price: 18.00,
    image: '/img/product/product_8.png',
  },
  {
    id: '9',
    title: 'Mitchell Slater Memorial Patch',
    price: 10.00,
    image: '/img/product/product_9.png',
  },
];

const Shop: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="w-full">
      <Breadcrumb
        subtitle="Welcome to our shop"
        title="Shop"
        bgImage="/img/breadcrumb_img.jpg"
      />

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top meta */}
          <div className="flex flex-col sm:flex-row justify-between items-center pb-8 mb-8 border-b border-gray-100">
            <p className="text-gray-500 text-sm">
              Showing <span className="font-semibold text-[#363a57]">1–{shopProducts.length}</span> of {shopProducts.length} results
            </p>
            <div className="mt-4 sm:mt-0">
              <span className="text-xs text-gray-400 font-medium">
                Proceeds directly support our youth mental health initiatives & scholarships
              </span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image & Badges */}
                <div className="relative overflow-hidden bg-gray-50 h-72 flex items-center justify-center p-6">
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-[#e07a5e] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10">
                      New
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Quick Add Overlay */}
                  <button
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                      })
                    }
                    className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-[#82b29a] hover:bg-[#6ea087] text-white flex items-center justify-center shadow-lg transition-transform transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    title="Add to Cart"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h5 className="font-['Rajdhani'] text-xl font-bold uppercase text-[#363a57] hover:text-[#82b29a] transition-colors mb-2">
                      <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </h5>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-[#e07a5e]">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to={`/product/${product.id}`}
                      className="text-xs uppercase font-bold text-gray-500 hover:text-[#82b29a] tracking-wider"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() =>
                        addToCart({
                          id: product.id,
                          title: product.title,
                          price: product.price,
                          image: product.image,
                        })
                      }
                      className="text-xs uppercase font-bold text-[#82b29a] hover:text-[#6ea087] tracking-wider"
                    >
                      + Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
