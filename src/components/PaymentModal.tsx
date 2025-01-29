import React from 'react';
import { X, CreditCard } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
  packageName: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, amount, packageName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Secure Payment</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Package:</span>
            <span className="font-semibold">{packageName}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Amount:</span>
            <span className="font-semibold text-orange-600">{amount}</span>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="1234 5678 9012 3456"
              />
              <CreditCard className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="123"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition-colors"
          >
            Pay {amount}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;