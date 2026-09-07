import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';
import { useCart } from '../context/CartContext';
import { shopProducts } from './Shop';
import { ShoppingBag, Check } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = shopProducts.find((p) => p.id === id) || shopProducts[0];

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="w-full">
      <Breadcrumb
        subtitle="Shop Item"
        title={product.title}
        bgImage="/img/breadcrumb_img.jpg"
        parent={{ label: 'Shop', url: '/shop' }}
      />

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Showcase */}
            <div className="lg:col-span-6 bg-gray-50 rounded-2xl p-10 flex items-center justify-center border border-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-96 w-auto object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="lg:col-span-6 space-y-6">
              {product.isNew && (
                <span className="inline-block bg-[#e07a5e] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  New Arrival
                </span>
              )}

              <h1 className="font-['Rajdhani'] text-3xl sm:text-4xl font-bold uppercase text-[#363a57]">
                {product.title}
              </h1>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-[#e07a5e]">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-[#888] leading-relaxed text-[16px]">
                Show your support for youth mental health and help eliminate the stigma with our official #CamoFriday gear. Every purchase directly contributes to scholarship awards and local community education programs.
              </p>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-3 bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-5 py-3 font-semibold text-gray-800">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-3 bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#82b29a] hover:bg-[#6ea087] text-white font-['Rajdhani'] font-bold text-base uppercase tracking-wider rounded-lg transition-colors shadow-md"
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>Add To Cart</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-6">
                <Link
                  to="/cart"
                  className="text-sm font-semibold text-[#82b29a] hover:underline"
                >
                  View Cart & Checkout &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
