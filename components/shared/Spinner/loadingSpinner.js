import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;