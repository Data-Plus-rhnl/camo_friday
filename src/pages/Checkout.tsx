import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/ui/Breadcrumb';
import { useCart } from '../context/CartContext';
import { CheckCircle2 } from 'lucide-react';

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
        <Breadcrumb title="Order Confirmation" bgImage="/img/breadcrumb_img.jpg" />
        <section className="py-24 bg-white text-center">
          <div className="max-w-xl mx-auto px-4 space-y-6">
            <CheckCircle2 className="w-20 h-20 text-[#82b29a] mx-auto" />
            <h2 className="font-['Rajdhani'] text-4xl font-bold uppercase text-[#363a57]">
              Order Placed Successfully!
            </h2>
            <p className="text-[#888] text-base leading-relaxed">
              Thank you for supporting #CamoFriday! A confirmation email and shipping updates will be sent to your provided email address shortly.
            </p>
            <div>
              <Link
                to="/"
                className="inline-block px-8 py-3.5 bg-[#82b29a] hover:bg-[#6ea087] text-white font-['Rajdhani'] font-bold text-sm uppercase tracking-wider rounded-lg transition-colors shadow-md"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Breadcrumb title="Checkout" bgImage="/img/breadcrumb_img.jpg" />

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Billing Details */}
            <div className="lg:col-span-7 bg-[#fcfcfc] p-8 sm:p-12 rounded-2xl border border-gray-100 shadow-sm space-y-6">
              <h3 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#363a57] border-b border-gray-200 pb-4">
                Billing & Shipping Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                />
                <div className="sm:col-span-2">
                  <input
                    type="text"
                    required
                    placeholder="Street Address"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  required
                  placeholder="City"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="State / Province"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Postal Code"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Country"
                  defaultValue="Canada"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                />
              </div>

              <div>
                <textarea
                  rows={3}
                  placeholder="Order notes (optional, e.g. special delivery instructions)"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:border-[#82b29a] focus:outline-none"
                ></textarea>
              </div>
            </div>

            {/* Order Summary & Submit */}
            <div className="lg:col-span-5 bg-gray-50 p-8 rounded-2xl border border-gray-100 h-fit space-y-6">
              <h3 className="font-['Rajdhani'] text-2xl font-bold uppercase text-[#363a57] border-b border-gray-200 pb-4">
                Your Order
              </h3>

              <div className="divide-y divide-gray-200 text-sm">
                {cart.map((item) => (
                  <div key={item.id} className="py-3 flex justify-between">
                    <span className="text-gray-700">
                      {item.title} &times; {item.quantity}
                    </span>
                    <span className="font-semibold text-[#363a57]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                <div className="py-3 flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-[#82b29a] font-semibold">Free Shipping</span>
                </div>
                <div className="py-4 flex justify-between text-lg font-bold text-[#363a57]">
                  <span>Total</span>
                  <span className="text-[#e07a5e]">${subtotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3 pt-2 text-xs text-gray-600">
                <div className="p-3 bg-white rounded-lg border border-gray-200 flex items-center gap-2">
                  <input type="radio" name="payment" id="card" defaultChecked />
                  <label htmlFor="card" className="font-medium text-gray-800">
                    Credit / Debit Card (Simulated Secure Checkout)
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={cart.length === 0}
                className="w-full py-4 bg-[#82b29a] hover:bg-[#6ea087] disabled:bg-gray-300 text-white font-['Rajdhani'] font-bold text-base uppercase tracking-wider rounded-lg transition-colors shadow-md"
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
