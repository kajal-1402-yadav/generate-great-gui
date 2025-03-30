
import React from 'react';
import TopNavigation from '@/components/TopNavigation';
import FeatureNavigation from '@/components/FeatureNavigation';
import { Camera, Map, LineChart, BarChart4 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, Rectangle 
} from 'recharts';

// Mock data for waste classification
const wasteClassificationData = [
  { id: 1, item: 'Bread', weight: '2.3 kg', category: 'Over-portioning', image: 'bread.jpg' },
  { id: 2, item: 'Mixed Vegetables', weight: '3.5 kg', category: 'Spoiled', image: 'vegetables.jpg' },
  { id: 3, item: 'Chicken', weight: '1.8 kg', category: 'Over-production', image: 'chicken.jpg' },
  { id: 4, item: 'Pasta', weight: '2.1 kg', category: 'Customer Returns', image: 'pasta.jpg' },
  { id: 5, item: 'Fish', weight: '1.2 kg', category: 'Spoiled', image: 'fish.jpg' },
];

// Mock data for the heatmap
const kitchenStations = [
  { name: 'Prep Station', wastePercentage: 24 },
  { name: 'Grill', wastePercentage: 18 },
  { name: 'Fry Station', wastePercentage: 35 },
  { name: 'Salad Bar', wastePercentage: 28 },
  { name: 'Pastry', wastePercentage: 15 },
  { name: 'Plating Area', wastePercentage: 12 },
];

// Mock data for the financial impact chart
const financialData = [
  {
    month: 'Jan',
    wasteAmount: 1200,
    wasteValue: 3600,
    target: 1000,
  },
  {
    month: 'Feb',
    wasteAmount: 1150,
    wasteValue: 3450,
    target: 1000,
  },
  {
    month: 'Mar',
    wasteAmount: 1000,
    wasteValue: 3000,
    target: 1000,
  },
  {
    month: 'Apr',
    wasteAmount: 900,
    wasteValue: 2700,
    target: 800,
  },
  {
    month: 'May',
    wasteAmount: 850,
    wasteValue: 2550,
    target: 800,
  },
  {
    month: 'Jun',
    wasteAmount: 800,
    wasteValue: 2400,
    target: 800,
  },
];

const WasteAnalysis = () => {
  return (
    <div className="min-h-screen bg-petpoja-black text-white">
      <TopNavigation />
      <FeatureNavigation />
      
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Vision-Powered Waste Analysis & Reporting</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-petpoja-gray border-petpoja-lightgray">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center">
                <Camera className="mr-2 text-petpoja-red" size={20} />
                Food Waste Classification
              </CardTitle>
              <CardDescription className="text-gray-300">
                AI vision models categorize and log discarded food
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {wasteClassificationData.map((waste) => (
                  <div key={waste.id} className="bg-petpoja-lightgray p-3 rounded flex items-center">
                    <div className="flex items-center justify-center bg-petpoja-gray w-12 h-12 rounded mr-3">
                      <Camera size={24} className="text-petpoja-red" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{waste.item}</span>
                        <Badge variant="outline" className="bg-petpoja-black border-petpoja-red text-white">
                          {waste.weight}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-300">Classification: {waste.category}</span>
                        <span className="text-xs text-gray-300">Detected 2 hours ago</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex justify-between">
                <div className="bg-petpoja-lightgray p-2 rounded">
                  <span className="text-sm font-medium">Total today: 10.9 kg</span>
                </div>
                <div className="bg-petpoja-lightgray p-2 rounded">
                  <span className="text-sm text-red-400">-8% vs. last week</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-petpoja-gray border-petpoja-lightgray">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center">
                <Map className="mr-2 text-petpoja-red" size={20} />
                Kitchen Waste Heatmap
              </CardTitle>
              <CardDescription className="text-gray-300">
                Visualize high-waste areas within your kitchen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 w-full bg-petpoja-lightgray rounded-lg p-4 flex items-center justify-center mb-4">
                <div className="grid grid-cols-3 gap-3 w-full h-full">
                  {kitchenStations.map((station) => (
                    <div 
                      key={station.name} 
                      className="flex flex-col items-center justify-center rounded-lg relative overflow-hidden"
                      style={{ 
                        backgroundColor: `rgba(224, 49, 70, ${station.wastePercentage / 100})`,
                        boxShadow: '0 0 15px rgba(224, 49, 70, 0.3)'
                      }}
                    >
                      <span className="font-medium text-white text-sm z-10">{station.name}</span>
                      <span className="text-white text-xs z-10">{station.wastePercentage}% waste</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-petpoja-lightgray p-3 rounded">
                <h3 className="font-medium mb-2">Heatmap Analysis:</h3>
                <p className="text-sm text-gray-300">The Fry Station shows the highest waste percentage at 35%. Focus on optimizing portioning and cooking techniques in this area to reduce waste.</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-petpoja-gray border-petpoja-lightgray mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-white flex items-center">
              <LineChart className="mr-2 text-petpoja-red" size={20} />
              Loss-to-Profit Dashboard
            </CardTitle>
            <CardDescription className="text-gray-300">
              Quantify waste in financial terms to improve operational decisions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={financialData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#3A3A3A" />
                  <XAxis dataKey="month" stroke="#999" />
                  <YAxis yAxisId="left" orientation="left" stroke="#999" />
                  <YAxis yAxisId="right" orientation="right" stroke="#999" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#2A2A2A', borderColor: '#3A3A3A' }}
                    labelStyle={{ color: 'white' }}
                  />
                  <Legend />
                  <Bar yAxisId="left" dataKey="wasteAmount" name="Waste (kg)" fill="#8884d8" activeBar={<Rectangle fill="#8884d8" stroke="#8884d8" />} />
                  <Line yAxisId="right" type="monotone" dataKey="wasteValue" name="Cost ($)" stroke="#E03146" strokeWidth={2} />
                  <Line yAxisId="left" type="monotone" dataKey="target" name="Target (kg)" stroke="#82ca9d" strokeWidth={2} strokeDasharray="5 5" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-petpoja-lightgray p-3 rounded">
                <h3 className="text-sm font-medium mb-1">Financial Impact</h3>
                <p className="text-2xl font-bold text-petpoja-red">$17,700</p>
                <p className="text-xs text-gray-300">Total waste cost YTD</p>
              </div>
              
              <div className="bg-petpoja-lightgray p-3 rounded">
                <h3 className="text-sm font-medium mb-1">Waste Reduction</h3>
                <p className="text-2xl font-bold text-green-500">33%</p>
                <p className="text-xs text-gray-300">Reduction since implementation</p>
              </div>
              
              <div className="bg-petpoja-lightgray p-3 rounded">
                <h3 className="text-sm font-medium mb-1">Projected Savings</h3>
                <p className="text-2xl font-bold text-blue-400">$32,500</p>
                <p className="text-xs text-gray-300">Annual savings if trend continues</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <h2 className="text-2xl font-semibold mb-4">AI Vision Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-petpoja-gray rounded-lg p-5">
            <h3 className="font-medium mb-2">Image Segmentation (U-Net)</h3>
            <p className="text-sm text-gray-300">Deep learning model that identifies and segments food waste in images, enabling precise classification and measurement.</p>
          </div>
          <div className="bg-petpoja-gray rounded-lg p-5">
            <h3 className="font-medium mb-2">Computer Vision with YOLO</h3>
            <p className="text-sm text-gray-300">Real-time object detection system categorizing disposed items with high accuracy and minimal processing time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteAnalysis;
