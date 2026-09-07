import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

  return (
    <div className="w-full">
      <Breadcrumb
        subtitle="YOUR BAG"
        title="Shopping Cart"
        bgImage="/img/breadcrumb_story_bg.jpg"
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
          {cart.length === 0 ? (
            <div className="text-center py-20 px-6 bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200/80 shadow-xl max-w-xl mx-auto space-y-6">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl font-bold uppercase text-[#363a57]">
                Your Cart is Empty
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Explore our official gear. Every purchase directly funds mental health education in Canadian schools.
              </p>
              <div>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#82b29a] hover:bg-[#6ea087] text-white font-['Rajdhani'] font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg hover:scale-105"
                >
                  <span>Explore Shop</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Cart Table */}
              <div className="lg:col-span-8 bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xl overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-xs font-bold uppercase text-gray-400 font-['Rajdhani'] tracking-wider">
                      <th className="py-4">Product</th>
                      <th className="py-4">Price</th>
                      <th className="py-4">Quantity</th>
                      <th className="py-4">Total</th>
                      <th className="py-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {cart.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-5">
                          <div className="flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-16 h-16 object-contain bg-gray-50 p-2 rounded-xl border border-gray-100"
                            />
                            <span className="font-['Rajdhani'] font-bold text-lg text-[#363a57] uppercase">
                              {item.title}
                            </span>
                          </div>
                        </td>
                        <td className="py-5 font-bold text-[#e07a5e]">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="py-5">
                          <div className="inline-flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1.5 text-gray-600 hover:bg-gray-200 font-bold"
                            >
                              -
                            </button>
                            <span className="px-3 py-1.5 text-sm font-semibold text-gray-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1.5 text-gray-600 hover:bg-gray-200 font-bold"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-5 font-bold text-[#363a57]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="py-5 text-center">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-4 bg-white/95 backdrop-blur-xl p-8 rounded-3xl border border-gray-200/80 shadow-xl h-fit space-y-6">
                <h4 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#363a57] border-b border-gray-200 pb-4">
                  Cart Totals
                </h4>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold text-gray-800">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-[#82b29a] font-bold">Free (Canada/USA)</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-[#363a57] pt-4 border-t border-gray-200">
                    <span>Total</span>
                    <span className="text-[#e07a5e]">${subtotal.toFixed(2)}</span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="block w-full text-center py-4 bg-[#82b29a] hover:bg-[#6ea087] text-white font-['Rajdhani'] font-bold text-base uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  Proceed to Checkout &rarr;
                </Link>

                <div className="text-center">
                  <Link
                    to="/shop"
                    className="text-xs uppercase font-bold text-gray-400 hover:text-[#82b29a] tracking-wider transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
