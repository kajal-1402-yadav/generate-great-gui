
import React from 'react';
import TopNavigation from '@/components/TopNavigation';
import FeatureNavigation from '@/components/FeatureNavigation';
import { ChefHat, DollarSign, Sparkles, Utensils } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// Mock data for recommended recipes
const recommendedRecipes = [
  { 
    id: 1, 
    name: 'Tomato and Basil Pasta', 
    ingredients: ['Pasta', 'Tomatoes', 'Basil', 'Olive Oil', 'Garlic'], 
    reason: 'Uses soon-to-expire tomatoes', 
    profitMargin: 78 
  },
  { 
    id: 2, 
    name: 'Chicken and Vegetable Stir Fry', 
    ingredients: ['Chicken Breast', 'Bell Peppers', 'Broccoli', 'Soy Sauce', 'Ginger'], 
    reason: 'Helps reduce excess chicken inventory', 
    profitMargin: 65 
  },
  { 
    id: 3, 
    name: 'Berry and Yogurt Parfait', 
    ingredients: ['Mixed Berries', 'Greek Yogurt', 'Honey', 'Granola'], 
    reason: 'Uses berries before they spoil', 
    profitMargin: 82 
  },
];

// Mock data for cost optimization
const costData = [
  { name: 'Ingredient Cost', value: 32 },
  { name: 'Labor', value: 45 },
  { name: 'Overhead', value: 18 },
  { name: 'Profit', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#E03146'];

// Mock data for generated dish
const generatedDish = {
  name: 'Mediterranean Chickpea Bowl',
  description: 'A nutritious bowl featuring chickpeas, cucumber, tomatoes, feta cheese, and olives with a lemon-herb dressing.',
  ingredients: [
    { name: 'Chickpeas', amount: '1 cup', status: 'In stock' },
    { name: 'Cucumber', amount: '1/2', status: 'In stock' },
    { name: 'Cherry Tomatoes', amount: '1/2 cup', status: 'In stock' },
    { name: 'Feta Cheese', amount: '1/4 cup', status: 'Low stock' },
    { name: 'Kalamata Olives', amount: '2 tbsp', status: 'In stock' },
    { name: 'Lemon', amount: '1/2', status: 'In stock' },
    { name: 'Olive Oil', amount: '1 tbsp', status: 'In stock' },
    { name: 'Fresh Herbs', amount: '1 tbsp', status: 'Low stock' },
  ],
  costToMake: '$2.75',
  recommendedPrice: '$11.95',
  profitMargin: '76.9%',
};

const MenuOptimization = () => {
  return (
    <div className="min-h-screen bg-petpoja-black text-white">
      <TopNavigation />
      <FeatureNavigation />
      
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Intelligent Menu Optimization</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-petpoja-gray border-petpoja-lightgray">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center">
                <ChefHat className="mr-2 text-petpoja-red" size={20} />
                AI-Driven Recipe Recommendations
              </CardTitle>
              <CardDescription className="text-gray-300">
                Smart suggestions based on your current inventory
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendedRecipes.map((recipe) => (
                  <div key={recipe.id} className="bg-petpoja-lightgray p-4 rounded">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{recipe.name}</h3>
                      <Badge variant="outline" className="bg-petpoja-red text-white border-none">
                        {recipe.profitMargin}% margin
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">
                      {recipe.reason}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {recipe.ingredients.map((ingredient, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-petpoja-gray">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-petpoja-gray border-petpoja-lightgray">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center">
                <DollarSign className="mr-2 text-petpoja-red" size={20} />
                Cost Optimization
              </CardTitle>
              <CardDescription className="text-gray-300">
                Calculate real-time dish costs and optimize menu pricing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={costData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {costData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#2A2A2A', borderColor: '#3A3A3A' }}
                      labelStyle={{ color: 'white' }}
                      formatter={(value) => [`${value}%`, null]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                {costData.map((entry, index) => (
                  <div key={`legend-${index}`} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-1"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm">{entry.name}: {entry.value}%</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 bg-petpoja-lightgray p-3 rounded">
                <h3 className="font-medium mb-1">Cost Optimization Insights:</h3>
                <p className="text-sm text-gray-300">Current average profit margin is only 5%. AI suggests increasing prices of high-demand items by 8% and optimizing ingredient usage to reduce costs by 3%.</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-petpoja-gray border-petpoja-lightgray mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-white flex items-center">
              <Sparkles className="mr-2 text-petpoja-red" size={20} />
              Generative AI Recipe Creation
            </CardTitle>
            <CardDescription className="text-gray-300">
              Using AI to create new dishes based on available inventory
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-medium mb-3">{generatedDish.name}</h3>
                <p className="text-gray-300 mb-4">{generatedDish.description}</p>
                
                <h4 className="font-medium mb-2">Ingredients:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {generatedDish.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-petpoja-lightgray p-2 rounded">
                      <span>{ingredient.name}</span>
                      <div className="flex items-center">
                        <span className="text-sm mr-2">{ingredient.amount}</span>
                        <Badge className={ingredient.status === 'In stock' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'}>
                          {ingredient.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="bg-petpoja-lightgray p-2 rounded">
                    <span className="text-sm text-gray-300">Cost: </span>
                    <span className="font-medium">{generatedDish.costToMake}</span>
                  </div>
                  <div className="bg-petpoja-lightgray p-2 rounded">
                    <span className="text-sm text-gray-300">Recommended Price: </span>
                    <span className="font-medium">{generatedDish.recommendedPrice}</span>
                  </div>
                  <div className="bg-petpoja-lightgray p-2 rounded">
                    <span className="text-sm text-gray-300">Margin: </span>
                    <span className="font-medium text-petpoja-red">{generatedDish.profitMargin}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="bg-petpoja-red hover:bg-red-700">Add to Menu</Button>
                  <Button variant="outline" className="border-petpoja-red text-petpoja-red hover:bg-petpoja-red hover:text-white">
                    Generate Another
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-center bg-petpoja-lightgray rounded-lg">
                <Utensils className="text-petpoja-red" size={120} />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <h2 className="text-2xl font-semibold mb-4">AI Models Used</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-petpoja-gray rounded-lg p-5">
            <h3 className="font-medium mb-2">Natural Language Generation</h3>
            <p className="text-sm text-gray-300">Using OpenAI and Hugging Face models to create dynamic recipes and dish descriptions based on available ingredients.</p>
          </div>
          <div className="bg-petpoja-gray rounded-lg p-5">
            <h3 className="font-medium mb-2">Linear Optimization</h3>
            <p className="text-sm text-gray-300">Mathematical models to calculate optimal pricing, ingredient combinations, and profit margins for menu items.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOptimization;
