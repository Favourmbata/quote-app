
import React from 'react';

const ProgressIndicator = ({ activeStep, setActiveStep }) => {
  const steps = [
    { step: 1, title: 'Request Information' },
    { step: 2, title: 'Terms and Attachments' },
    { step: 4, title: 'Review' }
  ];

  return (
    <div className="w-full px-6 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-4 rounded-lg shadow">
        {steps.map(({ step, title }) => (
          <div
            key={step}
            className="flex flex-col md:flex-row mb-6 md:0 items-center cursor-pointer w-full md:w-auto"
            onClick={() => setActiveStep(step)} 
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full font-bold md:mb-0 md:mr-4 ${
                activeStep === step
                  ? 'bg-green-500 text-white' 
                  : step < activeStep
                  ? 'bg-green-500 text-white' 
                  : 'bg-blue-500 text-white' 
              }`}
            >
              {step}
            </div>
            <div className="ml-4">
              <h4 className={`font-semibold ${activeStep >= step ? 'text-black' : 'text-gray-400'}`}>
                {title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;

