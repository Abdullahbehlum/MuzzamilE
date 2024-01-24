import React from "react";
const FilterComponent = ({ options, onChange }) => {
  const handleFilterChange = (event) => {
    const selectedOption = event.target.value;
    onChange(selectedOption);
  };

  return (
    <div className="flex items-center mb-4">
      <label className="mr-2">Filter By:</label>
      <select onChange={handleFilterChange} className="border p-2">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
