import React from "react";
import FilterItem from "../filteritem/FiltersItems";
import styles from './FiltersList.module.scss';

const FiltersList = (props) => {
    const { handleChecked, filters } = props;
    const getFilterJs = (filter, index) => (
        <>
            <FilterItem key={index} filter={filter} handleChecked={handleChecked} />
        </>
    );

    return (
        <aside className={styles.filtersList}>
            <div>
                <h4>Filters</h4>
                {filters.map(getFilterJs)}
            </div>
        </aside>
    );
};

export default FiltersList;
