
import React from 'react';
import { ArrowLeft, DropletIcon, MessageSquare, Search, Share2, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopNavigation = () => {
  return (
    <div className="bg-petpoja-black p-4 flex items-center justify-between border-b border-petpoja-gray">
      <div className="flex items-center">
        <Link to="/" className="text-white p-2 hover:bg-petpoja-gray rounded-full">
          <ArrowLeft size={24} />
        </Link>
        <div className="h-5 w-px bg-petpoja-gray mx-4"></div>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-white p-2 hover:bg-petpoja-gray rounded-full">
          <DropletIcon size={24} />
        </button>
        <button className="text-white p-2 hover:bg-petpoja-gray rounded-full">
          <MessageSquare size={24} />
        </button>
        <button className="text-white p-2 hover:bg-petpoja-gray rounded-full">
          <Search size={24} />
        </button>
        <button className="text-white p-2 hover:bg-petpoja-gray rounded-full">
          <Share2 size={24} />
        </button>
        <button className="text-white p-2 hover:bg-petpoja-gray rounded-full">
          <MoreVertical size={24} />
        </button>
      </div>
    </div>
  );
};

export default TopNavigation;
