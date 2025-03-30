
import React from 'react';
import TopNavigation from '@/components/TopNavigation';
import FeatureNavigation from '@/components/FeatureNavigation';
import { Camera, Refrigerator, Clock, BarChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const mockInventoryItems = [
  { id: 1, name: 'Tomatoes', quantity: 8.5, unit: 'kg', status: 'good', expiry: '3 days' },
  { id: 2, name: 'Chicken Breast', quantity: 12, unit: 'kg', status: 'good', expiry: '2 days' },
  { id: 3, name: 'Lettuce', quantity: 4, unit: 'kg', status: 'warning', expiry: '1 day' },
  { id: 4, name: 'Milk', quantity: 5, unit: 'L', status: 'good', expiry: '5 days' },
  { id: 5, name: 'Potatoes', quantity: 15, unit: 'kg', status: 'good', expiry: '14 days' },
  { id: 6, name: 'Bell Peppers', quantity: 3, unit: 'kg', status: 'warning', expiry: '1 day' },
  { id: 7, name: 'Onions', quantity: 10, unit: 'kg', status: 'good', expiry: '10 days' },
  { id: 8, name: 'Cheese', quantity: 2.5, unit: 'kg', status: 'critical', expiry: 'Today' },
];

const SmartInventory = () => {
  return (
    <div className="min-h-screen bg-petpoja-black text-white">
      <TopNavigation />
      <FeatureNavigation />
      
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Computer Vision for Smart Inventory Management</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-petpoja-gray border-petpoja-lightgray">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center">
                <Camera className="mr-2 text-petpoja-red" size={20} />
                Visual Tracking
              </CardTitle>
              <CardDescription className="text-gray-300">
                AI-powered image recognition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">Last scan: 35 minutes ago</p>
              <p className="text-sm text-gray-300">Items detected: 32</p>
            </CardContent>
          </Card>
          
          <Card className="bg-petpoja-gray border-petpoja-lightgray">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center">
                <Refrigerator className="mr-2 text-petpoja-red" size={20} />
                Stock Levels
              </CardTitle>
              <CardDescription className="text-gray-300">
                Real-time monitoring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Proteins</span>
                  <span className="text-sm">85%</span>
                </div>
                <Progress value={85} className="h-2 bg-petpoja-lightgray" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Produce</span>
                  <span className="text-sm">62%</span>
                </div>
                <Progress value={62} className="h-2 bg-petpoja-lightgray" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Dairy</span>
                  <span className="text-sm">40%</span>
                </div>
                <Progress value={40} className="h-2 bg-petpoja-lightgray" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-petpoja-gray border-petpoja-lightgray">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center">
                <Clock className="mr-2 text-petpoja-red" size={20} />
                Spoilage Detection
              </CardTitle>
              <CardDescription className="text-gray-300">
                AI-detected issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-yellow-500 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  3 items near expiry
                </p>
                <p className="text-sm text-red-500 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  1 item needs attention
                </p>
                <p className="text-sm text-green-500 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  28 items in good condition
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-petpoja-gray border-petpoja-lightgray">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center">
                <BarChart className="mr-2 text-petpoja-red" size={20} />
                Model Accuracy
              </CardTitle>
              <CardDescription className="text-gray-300">
                ML model performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Object Detection</span>
                  <span className="text-sm">97%</span>
                </div>
                <Progress value={97} className="h-2 bg-petpoja-lightgray" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Quantity Estimation</span>
                  <span className="text-sm">88%</span>
                </div>
                <Progress value={88} className="h-2 bg-petpoja-lightgray" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Spoilage Detection</span>
                  <span className="text-sm">92%</span>
                </div>
                <Progress value={92} className="h-2 bg-petpoja-lightgray" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Current Inventory Status</h2>
        <div className="bg-petpoja-gray rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-petpoja-lightgray">
                  <th className="px-4 py-3 text-left">Item</th>
                  <th className="px-4 py-3 text-left">Quantity</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Expiry</th>
                </tr>
              </thead>
              <tbody>
                {mockInventoryItems.map((item) => (
                  <tr key={item.id} className="border-t border-petpoja-lightgray">
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.quantity} {item.unit}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium
                        ${item.status === 'good' ? 'bg-green-900 text-green-300' : 
                          item.status === 'warning' ? 'bg-yellow-900 text-yellow-300' : 
                          'bg-red-900 text-red-300'}`}>
                        {item.status === 'good' ? 'Good' : 
                          item.status === 'warning' ? 'Soon Expiring' : 
                          'Critical'}
                      </span>
                    </td>
                    <td className="px-4 py-3">{item.expiry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartInventory;
