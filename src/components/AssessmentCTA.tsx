import React from 'react';
import { Link } from 'react-router-dom';

const AssessmentCTA: React.FC = () => (
  <div className="bg-indigo-100 rounded-lg p-6 mb-12 relative overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
      alt="Skin care"
      className="absolute inset-0 w-full h-full object-cover opacity-20"
    />
    <div className="relative z-10">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">Want a more effective, personalized skincare routine?</h2>
      <p className="text-lg text-indigo-700 mb-4">Take our Skin Assessment to get tailored recommendations for your unique skin type and concerns.</p>
      <Link
        to="/skin-assessment"
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
      >
        Start Your Skin Assessment
      </Link>
    </div>
  </div>
);

export default AssessmentCTA;