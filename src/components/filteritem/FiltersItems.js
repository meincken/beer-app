import React, { useState } from "react";
import styles from './FiltersItems.module.scss';

const FilterItem = (props) => {
    const { filter, handleChecked } = props;
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        handleChecked(filter, !isChecked);
        setIsChecked(!isChecked);
    };

    const { label, value } = filter;

    return (
        <div className={styles.filterItem}>
            <label htmlFor={value}>{label}</label>
            <input id={value} type="checkbox" value={value} onClick={toggleCheckbox} />
        </div>
    );
};

export default FilterItem;
