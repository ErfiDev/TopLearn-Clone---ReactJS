import React from 'react';
import FilterBox from './filterBox'
import SearchBox from './searchBox';

const FilterCourses = () => {
    return (  
        <div className="filter-courses-list">
            <div className="filter-search-box">
                <FilterBox />
                <SearchBox />
            </div>

            <div className="course-filterd-container">

            </div>

            <div className="filter-option-container">

            </div>
        </div>
    );
}
 
export default FilterCourses;