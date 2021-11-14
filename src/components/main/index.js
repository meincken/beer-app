import React from "react";
import CardList from "../cardlist/";

const Main = (props) => {
    const { beers, filters } = props;

    return (
        <>
            <CardList
                beers={beers}
                filters={filters}
            />
        </>
    );
};

export default Main;
