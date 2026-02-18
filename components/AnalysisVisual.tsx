"use client";

import { useState } from "react";

interface AnalysisVisualProps {
  analysisData: {
    [category: string]: {
      [key: string]: number;
    };
  };
}

export const AnalysisVisual: React.FC<AnalysisVisualProps> = ({
  analysisData,
}) => {
  const categories = Object.keys(analysisData);

  // Store selected option PER category independently
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0] || "",
  );

  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >(() => {
    // Initialize each category with its top option
    const initial: Record<string, string> = {};
    categories.forEach((category) => {
      const categoryData = analysisData[category];
      if (categoryData) {
        initial[category] = Object.entries(categoryData).reduce(
          (max, current) => (current[1] > max[1] ? current : max),
        )[0];
      }
    });
    return initial;
  });

  // Current category data
  const currentCategoryData = analysisData[selectedCategory] || {};

  // Selected option for the CURRENT category
  const currentSelectedOption = selectedOptions[selectedCategory] || "";

  // Selected percentage for the CURRENT category
  const selectedPercentage = currentCategoryData[currentSelectedOption] || 0;

  // Age keys in chronological order
  const AGE_ORDER = [
    "0-2",
    "3-9",
    "10-19",
    "20-29",
    "30-39",
    "40-49",
    "50-59",
    "60-69",
    "70+",
  ];

  // Sort options - chronological for age, by percentage for others
  const getSortedOptions = (category: string) => {
    const data = analysisData[category] || {};
    const entries = Object.entries(data);

    if (category.toLowerCase() === "age") {
      return entries
        .sort(([a], [b]) => {
          const aIndex = AGE_ORDER.indexOf(a);
          const bIndex = AGE_ORDER.indexOf(b);
          // If not in AGE_ORDER, put at end
          const aOrder = aIndex === -1 ? 999 : aIndex;
          const bOrder = bIndex === -1 ? 999 : bIndex;
          return aOrder - bOrder;
        })
        .map(([key, percentage]) => ({ key, percentage }));
    }

    return entries
      .sort(([, a], [, b]) => b - a)
      .map(([key, percentage]) => ({ key, percentage }));
  };

  const sortedOptions = getSortedOptions(selectedCategory);

  // Handle selecting an option - only updates the current category
  const handleOptionSelect = (key: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [selectedCategory]: key,
    }));
  };

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Fixed circle size
  const radius = 145;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - selectedPercentage * circumference;

  return (
    <div className="flex gap-6 w-full h-100 mx-auto mt-15 max-md:flex-col max-md:px-8">
      {/* Category Selection */}
      <div className="flex flex-col gap-4 md:w-30 w-full md:ml-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`p-2 text-left text-sm capitalize border-t font-bold transition-colors cursor-pointer ${
              selectedCategory === category
                ? "bg-black text-white"
                : "text-black hover:bg-gray-300"
            }`}
          >
            {/* Show each category's independently selected option */}
            <div>{selectedOptions[category]}</div>
            <div className="mt-2 text-md">{category}</div>
          </button>
        ))}
      </div>

      {/* Circle Percentage */}
      <div className="flex-1 flex items-center justify-center md:border-t relative">
        <div className="max-md:hidden absolute left-5 top-5 text-3xl">
          <span className="capitalize">{currentSelectedOption}</span>
          {selectedCategory.toLowerCase() === "age" && ` y.o.`}
        </div>

        {/* Fixed size container so layout never shifts */}
        <div className="md:absolute right-0 bottom-25 w-[300px] h-[300px]">
          <svg width="300" height="300" className="transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="150"
              cy="150"
              r={radius}
              stroke="#E5E7EB"
              strokeWidth="5"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="150"
              cy="150"
              r={radius}
              stroke="#000000"
              strokeWidth="5"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-500 ease-out"
              strokeLinecap="round"
            />
          </svg>
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl">
              {Math.round(selectedPercentage * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* Bottom hint */}
      <div className="md:absolute text-center bottom-10 left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 text-[#313030af] max-md:text-xs">
        If A.I. estimate is wrong, select the correct one.
      </div>

      {/* Options List */}
      <div className="md:w-80 p-3 border-t mr-8 max-md:pb-30">
        <div className="flex justify-between items-center mb-2">
          <h3 className="uppercase text-sm">{selectedCategory}</h3>
          <h3 className="uppercase text-sm">A.I. Confidence</h3>
        </div>

        <div>
          {sortedOptions.map(({ key, percentage }) => (
            <button
              key={key}
              onClick={() => handleOptionSelect(key)}
              className={`w-full flex items-center justify-between py-1 px-3 transition-colors ${
                currentSelectedOption === key
                  ? "bg-black text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="capitalize text-sm flex gap-2">
                  {currentSelectedOption === key ? <p>◈</p> : <p>⬦</p>}
                  {key}
                </span>
              </div>
              <span>{Math.round(percentage * 100)}%</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
