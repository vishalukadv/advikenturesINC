import React, { useState } from 'react';
import PaymentModal from './PaymentModal';

interface BookButtonProps {
  price: string;
  packageName: string;
}

const BookButton: React.FC<BookButtonProps> = ({ price, packageName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
      >
        Book Now
      </button>
      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        amount={price}
        packageName={packageName}
      />
    </>
  );
};

export default BookButton;