
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const features = [
  { id: 'inventory', name: '1. Smart Inventory', path: '/smart-inventory' },
  { id: 'demand', name: '2. Demand & Waste Prediction', path: '/demand-prediction' },
  { id: 'menu', name: '3. Menu Optimization', path: '/menu-optimization' },
  { id: 'waste', name: '4. Waste Analysis', path: '/waste-analysis' },
];

const FeatureNavigation = () => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col py-2 px-4">
      {features.map((feature) => (
        <Link
          key={feature.id}
          to={feature.path}
          className={cn(
            "py-4 px-2 font-medium text-lg border-b border-petpoja-gray",
            location.pathname === feature.path
              ? "text-white"
              : "text-gray-400 hover:text-white"
          )}
        >
          {feature.name}
        </Link>
      ))}
    </div>
  );
};

export default FeatureNavigation;
