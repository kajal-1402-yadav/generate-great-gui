
import React from 'react';
import TopNavigation from '@/components/TopNavigation';
import FeatureNavigation from '@/components/FeatureNavigation';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, AlertTriangle, Truck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for sales forecasting
const forecastData = [
  { name: 'Mon', actual: 4000, predicted: 4200 },
  { name: 'Tue', actual: 3000, predicted: 3100 },
  { name: 'Wed', actual: 2000, predicted: 2100 },
  { name: 'Thu', actual: 2780, predicted: 2800 },
  { name: 'Fri', actual: 4890, predicted: 5000 },
  { name: 'Sat', actual: 6390, predicted: 6200 },
  { name: 'Sun', actual: 5490, predicted: 5300 },
  { name: 'Next Mon', actual: null, predicted: 4300 },
  { name: 'Next Tue', actual: null, predicted: 3200 },
  { name: 'Next Wed', actual: null, predicted: 2300 },
];

// Mock data for high-risk items
const highRiskItems = [
  { id: 1, name: 'Fresh Fish', risk: 85, reason: 'Short shelf life, variable demand' },
  { id: 2, name: 'Berries', risk: 78, reason: 'Seasonality and quick spoilage' },
  { id: 3, name: 'Green Leafy Vegetables', risk: 72, reason: 'Highly perishable' },
  { id: 4, name: 'Shellfish', risk: 68, reason: 'Variable demand, high spoilage risk' },
  { id: 5, name: 'Avocados', risk: 65, reason: 'Narrow ripeness window' },
];

// Mock data for inventory recommendations
const inventoryRecommendations = [
  { id: 1, name: 'Chicken Breast', current: 12, recommended: 8, action: 'Reduce' },
  { id: 2, name: 'Tomatoes', current: 8.5, recommended: 10, action: 'Increase' },
  { id: 3, name: 'Lettuce', current: 4, recommended: 3, action: 'Reduce' },
  { id: 4, name: 'Rice', current: 25, recommended: 25, action: 'Maintain' },
  { id: 5, name: 'Onions', current: 10, recommended: 15, action: 'Increase' },
];

const DemandPrediction = () => {
  return (
    <div className="min-h-screen bg-petpoja-black text-white">
      <TopNavigation />
      <FeatureNavigation />
      
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">AI-Powered Demand & Waste Prediction</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-petpoja-gray border-petpoja-lightgray lg:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="mr-2 text-petpoja-red" size={20} />
                Sales Forecasting
              </CardTitle>
              <CardDescription className="text-gray-300">
                ML-powered prediction based on historical data and seasonality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={forecastData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#3A3A3A" />
                    <XAxis dataKey="name" stroke="#999" />
                    <YAxis stroke="#999" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#2A2A2A', borderColor: '#3A3A3A' }}
                      labelStyle={{ color: 'white' }}
                    />
                    <Line type="monotone" dataKey="actual" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="predicted" stroke="#E03146" strokeWidth={2} dot={{ r: 4 }} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center mt-2 space-x-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#8884d8] rounded-full mr-2"></div>
                  <span className="text-sm">Actual</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-petpoja-red rounded-full mr-2"></div>
                  <span className="text-sm">Predicted</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-petpoja-gray border-petpoja-lightgray">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center">
                <AlertTriangle className="mr-2 text-petpoja-red" size={20} />
                High-Risk Items
              </CardTitle>
              <CardDescription className="text-gray-300">
                Items prone to spoilage and overuse
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {highRiskItems.map((item) => (
                  <div key={item.id} className="bg-petpoja-lightgray p-3 rounded">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-petpoja-red">{item.risk}% risk</span>
                    </div>
                    <p className="text-xs text-gray-300">{item.reason}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-petpoja-gray border-petpoja-lightgray mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-white flex items-center">
              <Truck className="mr-2 text-petpoja-red" size={20} />
              Dynamic Inventory Replenishment
            </CardTitle>
            <CardDescription className="text-gray-300">
              AI-suggested optimal stock levels to reduce over-purchasing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="recommendation" className="w-full">
              <TabsList className="bg-petpoja-lightgray w-full grid grid-cols-2">
                <TabsTrigger value="recommendation">Recommendations</TabsTrigger>
                <TabsTrigger value="insights">Insights</TabsTrigger>
              </TabsList>
              <TabsContent value="recommendation">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-petpoja-lightgray">
                        <th className="px-4 py-3 text-left">Item</th>
                        <th className="px-4 py-3 text-left">Current Stock</th>
                        <th className="px-4 py-3 text-left">Recommended</th>
                        <th className="px-4 py-3 text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inventoryRecommendations.map((item) => (
                        <tr key={item.id} className="border-t border-petpoja-lightgray">
                          <td className="px-4 py-3">{item.name}</td>
                          <td className="px-4 py-3">{item.current} kg</td>
                          <td className="px-4 py-3">{item.recommended} kg</td>
                          <td className="px-4 py-3">
                            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium
                              ${item.action === 'Reduce' ? 'bg-red-900 text-red-300' : 
                                item.action === 'Increase' ? 'bg-green-900 text-green-300' : 
                                'bg-blue-900 text-blue-300'}`}>
                              {item.action}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="insights">
                <div className="p-4 space-y-4">
                  <div className="bg-petpoja-lightgray p-3 rounded">
                    <h3 className="font-medium mb-2">Weekly Purchase Optimization</h3>
                    <p className="text-sm text-gray-300">Based on your current inventory levels and predicted demand, our AI suggests reducing your weekly order by 15% to optimize costs while maintaining adequate stock.</p>
                  </div>
                  <div className="bg-petpoja-lightgray p-3 rounded">
                    <h3 className="font-medium mb-2">Seasonal Adjustments</h3>
                    <p className="text-sm text-gray-300">Summer is approaching - consider increasing stock of seasonal items like berries, watermelon, and lighter proteins while reducing heavier winter items.</p>
                  </div>
                  <div className="bg-petpoja-lightgray p-3 rounded">
                    <h3 className="font-medium mb-2">Special Event Planning</h3>
                    <p className="text-sm text-gray-300">A local festival is happening next weekend. Consider increasing stock of to-go friendly items by 30% to accommodate higher expected traffic.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <h2 className="text-2xl font-semibold mb-4">ML Models Used</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-petpoja-gray rounded-lg p-5">
            <h3 className="font-medium mb-2">Time Series Forecasting</h3>
            <p className="text-sm text-gray-300">Using ARIMA, Prophet, and LSTM models to predict future demand patterns based on historical data.</p>
          </div>
          <div className="bg-petpoja-gray rounded-lg p-5">
            <h3 className="font-medium mb-2">Regression Models</h3>
            <p className="text-sm text-gray-300">Applied to predict quantities of food waste based on various operational factors and customer patterns.</p>
          </div>
          <div className="bg-petpoja-gray rounded-lg p-5">
            <h3 className="font-medium mb-2">Reinforcement Learning</h3>
            <p className="text-sm text-gray-300">Continuously improving inventory recommendations through dynamic adjustment based on feedback loops.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandPrediction;
