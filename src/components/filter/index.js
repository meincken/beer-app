import React from "react";
import FiltersList from "../filterslist/";

const Filter = (props) => {
    const { filters, handleChecked } = props;

    return (
        <>
            <FiltersList filters={filters} handleChecked={handleChecked} />
        </>
    );
};

export default Filter;
