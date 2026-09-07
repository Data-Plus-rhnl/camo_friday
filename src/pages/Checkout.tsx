import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';
import { useCart } from '../context/CartContext';
import { CheckCircle2, Lock, ArrowRight } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cart, subtotal, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <div className="w-full">
        <Breadcrumb
          subtitle="CONFIRMATION"
          title="Order Confirmation"
          bgImage="/img/breadcrumb_story_bg.jpg"
        />
        <section className="relative py-28 bg-[#faf9f5] overflow-hidden text-center">
          <div
            className="absolute inset-0 pointer-events-none opacity-45"
            style={{
              backgroundImage: 'url(/img/gray_map_bg.png)',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative max-w-xl mx-auto px-6 py-14 bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200/80 shadow-2xl space-y-6">
            <div className="w-20 h-20 bg-[#82b29a]/15 text-[#82b29a] rounded-full flex items-center justify-center mx-auto text-3xl shadow-sm">
              <CheckCircle2 className="w-10 h-10 text-[#82b29a]" />
            </div>
            <h2 className="font-['Rajdhani'] text-3xl sm:text-4xl font-bold uppercase text-[#363a57]">
              Order Placed Successfully!
            </h2>
            <p className="text-[#666] text-sm sm:text-base leading-relaxed">
              Thank you for supporting #CamoFriday! A confirmation email and shipping updates will be sent to your provided email address shortly.
            </p>
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#82b29a] hover:bg-[#6ea087] text-white font-['Rajdhani'] font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg hover:scale-105"
              >
                <span>Back to Home</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Breadcrumb
        subtitle="FINAL STEP"
        title="Checkout"
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
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Billing Details */}
            <div className="lg:col-span-7 bg-white/95 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <h3 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#363a57]">
                  Billing & Shipping Details
                </h3>
                <span className="text-xs uppercase font-bold text-gray-400 flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#82b29a]" />
                  Encrypted
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                />
                <div className="sm:col-span-2">
                  <input
                    type="text"
                    required
                    placeholder="Street Address"
                    className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  required
                  placeholder="City"
                  className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Province / State"
                  className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Postal / Zip Code"
                  className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Country"
                  defaultValue="Canada"
                  className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <textarea
                  rows={3}
                  placeholder="Order notes (optional, e.g. delivery buzz code)"
                  className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm focus:border-[#82b29a] focus:bg-white focus:outline-none"
                ></textarea>
              </div>
            </div>

            {/* Order Summary & Submit */}
            <div className="lg:col-span-5 bg-white/95 backdrop-blur-xl p-8 rounded-3xl border border-gray-200/80 shadow-xl h-fit space-y-6">
              <h3 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#363a57] border-b border-gray-200 pb-4">
                Your Order
              </h3>

              <div className="divide-y divide-gray-200 text-sm">
                {cart.map((item) => (
                  <div key={item.id} className="py-3 flex justify-between">
                    <span className="text-gray-700">
                      {item.title} &times; {item.quantity}
                    </span>
                    <span className="font-bold text-[#363a57]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                <div className="py-3 flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-[#82b29a] font-bold">Free Shipping</span>
                </div>
                <div className="py-4 flex justify-between text-lg font-bold text-[#363a57]">
                  <span>Total</span>
                  <span className="text-[#e07a5e]">${subtotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3 pt-2 text-xs text-gray-600">
                <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-2">
                  <input type="radio" name="payment" id="card" defaultChecked />
                  <label htmlFor="card" className="font-bold text-gray-800">
                    Credit / Debit Card (Simulated Secure Checkout)
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={cart.length === 0}
                className="w-full py-4 bg-[#82b29a] hover:bg-[#6ea087] disabled:bg-gray-300 text-white font-['Rajdhani'] font-bold text-base uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                Place Order (${subtotal.toFixed(2)})
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
