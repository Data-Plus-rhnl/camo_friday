import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';
import { useCart } from '../context/CartContext';
import { shopProducts } from './Shop';
import { ShoppingBag, Check, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

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
        subtitle="SHOP ITEM"
        title={product.title}
        bgImage="/img/breadcrumb_story_bg.jpg"
        parent={{ label: 'Shop', url: '/shop' }}
      />

      <section className="relative py-24 sm:py-32 bg-[#faf9f5] overflow-hidden">
        {/* Background Dot Matrix Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            backgroundImage: 'url(/img/gray_map_bg.png)',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
          }}
        />

        {/* Contour Elevation Rings */}
        <div
          className="absolute -top-24 -right-24 w-[480px] h-[480px] pointer-events-none opacity-[0.06] bg-no-repeat bg-contain"
          style={{ backgroundImage: 'url(/img/round_shape.png)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-14 border border-gray-200/80 shadow-xl">
            {/* Image Showcase */}
            <div className="lg:col-span-6 bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl p-10 flex items-center justify-center border border-gray-200/60 shadow-inner">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-96 w-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Product Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                {product.isNew && (
                  <span className="inline-block bg-[#e07a5e] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Featured Item
                  </span>
                )}
                <span className="inline-flex items-center gap-1 text-xs uppercase font-bold text-[#82b29a] px-3 py-1 bg-[#82b29a]/10 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Official Foundation Gear
                </span>
              </div>

              <h1 className="font-['Rajdhani'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#363a57] tracking-tight">
                {product.title}
              </h1>

              <div className="flex items-center gap-4">
                <span className="text-3xl sm:text-4xl font-bold text-[#e07a5e]">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-[#666] leading-relaxed text-[15.5px]">
                Show your support for youth mental health and help eliminate the stigma with our official #CamoFriday gear. Every single dollar of proceeds directly funds school awareness toolkits and the Mitchell Slater Memorial Scholarship fund.
              </p>

              {/* Quantity and Add to Cart */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-3.5 text-gray-600 hover:bg-gray-200 transition-colors font-bold"
                  >
                    -
                  </button>
                  <span className="px-5 py-3.5 font-bold text-gray-800 text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-3.5 text-gray-600 hover:bg-gray-200 transition-colors font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#82b29a] hover:bg-[#6ea087] text-white font-['Rajdhani'] font-bold text-base uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
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

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-gray-100 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#82b29a]" />
                  <span>Ships across Canada & USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[#82b29a]" />
                  <span>100% Non-Profit Initiative</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/cart"
                  className="text-sm font-bold uppercase tracking-wider text-[#82b29a] hover:text-[#6ea087] inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Cart & Checkout</span>
                  <span>&rarr;</span>
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
