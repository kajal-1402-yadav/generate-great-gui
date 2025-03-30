
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TopNavigation from "@/components/TopNavigation";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-petpoja-black text-white">
      <TopNavigation />
      
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center">
        <h1 className="text-6xl font-bold text-petpoja-red mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button asChild className="bg-petpoja-red hover:bg-red-700">
          <Link to="/">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
