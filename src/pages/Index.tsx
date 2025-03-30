
import React from 'react';
import TopNavigation from '@/components/TopNavigation';
import Logo from '@/components/Logo';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      id: 'inventory',
      title: 'Smart Inventory Management',
      description: 'Visual tracking and real-time stock detection using computer vision',
      path: '/smart-inventory'
    },
    {
      id: 'demand',
      title: 'Demand & Waste Prediction',
      description: 'AI-powered sales forecasting and waste prediction',
      path: '/demand-prediction'
    },
    {
      id: 'menu',
      title: 'Menu Optimization',
      description: 'AI-driven recipe recommendations and cost optimization',
      path: '/menu-optimization'
    },
    {
      id: 'waste',
      title: 'Waste Analysis & Reporting',
      description: 'Vision-powered waste classification and financial impact dashboard',
      path: '/waste-analysis'
    },
  ];

  return (
    <div className="min-h-screen bg-petpoja-black text-white">
      <TopNavigation />
      
      <div className="container mx-auto p-6">
        <Logo />
        
        <div className="max-w-3xl mx-auto mt-8 mb-12">
          <h2 className="text-2xl font-semibold mb-2">AI-Powered Smart Kitchen & Waste Minimizer</h2>
          <p className="text-gray-300">
            Develop an AI-driven system for restaurant owners that enhances kitchen efficiency through
            computer vision, machine learning, and advanced analytics. The platform automates
            inventory tracking, predicts food spoilage, optimizes menus, and delivers actionable insights to
            reduce waste and increase profitability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <Link 
              key={feature.id}
              to={feature.path}
              className="bg-petpoja-gray rounded-lg p-6 hover:bg-petpoja-lightgray transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <ArrowRight className="text-petpoja-red" />
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
