import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Sparkles, ShieldCheck, Heart } from 'lucide-react';

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
      {/* Elevated Blended Camo Hero Banner */}
      <Breadcrumb
        subtitle="GEAR FOR A PURPOSE"
        title="Official Shop"
        bgImage="/img/breadcrumb_story_bg.jpg"
      />

      {/* Layered Showcase Section */}
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

        {/* Ambient Radial Lighting Glows */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#82b29a]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-[#e07a5e]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Contour Elevation Rings */}
        <div
          className="absolute -top-24 -right-24 w-[500px] h-[500px] pointer-events-none opacity-[0.06] bg-no-repeat bg-contain"
          style={{ backgroundImage: 'url(/img/round_shape.png)' }}
        />
        <div
          className="absolute bottom-10 -left-20 w-[450px] h-[450px] pointer-events-none opacity-[0.05] bg-no-repeat bg-contain"
          style={{ backgroundImage: 'url(/img/round_shape.png)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Meta Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8 mb-12 border-b border-gray-200/80 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82b29a]/10 text-[#82b29a] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                100% Proceeds Support Mental Health
              </div>
              <p className="text-gray-500 text-sm">
                Showing <span className="font-bold text-[#363a57]">1–{shopProducts.length}</span> authentic awareness items
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-gray-200/80 text-xs font-semibold text-[#363a57] shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#82b29a]" />
              <span>Free Shipping on Canadian Orders Over $75</span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-2xl hover:border-[#82b29a]/50 transition-all duration-500 flex flex-col"
              >
                {/* Image & Badges */}
                <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100/60 h-72 flex items-center justify-center p-8">
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-[#e07a5e] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10 shadow-md">
                      Featured
                    </span>
                  )}

                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full w-auto object-contain group-hover:scale-108 transition-transform duration-500 ease-out"
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
                    className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#82b29a] hover:bg-[#6ea087] text-white flex items-center justify-center shadow-xl transition-all duration-300 transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-110"
                    title="Add to Cart"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h5 className="font-['Rajdhani'] text-xl font-bold uppercase text-[#363a57] hover:text-[#82b29a] transition-colors mb-2">
                      <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </h5>
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold text-[#e07a5e]">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 mt-5 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to={`/product/${product.id}`}
                      className="text-xs uppercase font-bold text-gray-500 hover:text-[#82b29a] tracking-wider transition-colors"
                    >
                      View Details &rarr;
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

          {/* Bottom Mission Card */}
          <div className="mt-20 relative rounded-3xl overflow-hidden bg-[#18211b] border border-[#82b29a]/30 p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'url(/img/breadcrumb_story_bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="relative z-10 max-w-xl">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#82b29a] font-bold mb-2">
                <Heart className="w-3.5 h-3.5" />
                Wear Your Support
              </span>
              <h3 className="font-['Rajdhani'] text-2xl sm:text-3xl font-bold uppercase tracking-wide">
                Every Shirt Sparks a Conversation
              </h3>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                Wearing camo is an open invitation for friends, coworkers, and strangers to know that you are a safe person to talk to about mental illness.
              </p>
            </div>
            <div className="relative z-10">
              <Link
                to="/our-story"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#82b29a] hover:bg-[#6ea087] text-white font-['Rajdhani'] font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg hover:scale-105"
              >
                Read Mitchell's Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
