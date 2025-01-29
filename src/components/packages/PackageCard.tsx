import React from 'react';
import { MapPin, Calendar, Users, Check } from 'lucide-react';
import { Package } from '../../types';
import BookButton from '../BookButton';

const PackageCard: React.FC<Package> = ({ 
  title, 
  location, 
  duration, 
  groupSize, 
  price, 
  image, 
  features,
  tag
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        {tag && (
          <span className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {tag}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2 text-orange-600" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2 text-orange-600" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-5 w-5 mr-2 text-orange-600" />
            <span>{groupSize}</span>
          </div>
        </div>
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-600">
              <Check className="h-4 w-4 mr-2 text-orange-600 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-600">{price}</span>
          <BookButton price={price} packageName={title} />
        </div>
      </div>
    </div>
  );
};

export default PackageCard;