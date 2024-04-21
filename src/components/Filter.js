import React, { useState } from "react";

const Filter = (props) => {
  const filterData = props.filterData;
  let category=props.category;
  let setCategory=props.setCategory;
  function onCategoryFilter(title){
    setCategory(title)
  }
 
  return (
    <div className="flex w-11/12  flex-wrap max-w-max space-x-4 mx-auto justify-center">
      {filterData.map((data) => (
        <button
          onClick={()=>onCategoryFilter(data.title)}
          className={`px-2 py-1 text-lg font-medium my-3 text-white bg-black hover:bg-opacity-30 border-2 rounded-md transition-all duration-300 ${category===data.title?"bg-opacity-50 border-white":"border-black opacity-100"}`}
          key={data.id}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
