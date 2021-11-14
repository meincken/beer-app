import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "./header";
import Filter from "./filter";
import Main from "./main";
import Footer from "./footer";

function App () {
    const [beers, setBeers] = useState([]);

    const [filters, setFilters] = useState([
        { value: "abv", label: "High ABV (> 6.0%)", isChecked: false },
        { value: "classic", label: "Classic Range", isChecked: false },
        { value: "acidic", label: "Acidic (< 4)", isChecked: false }
    ]);

    const handleChecked = (filter, isChecked) => {
        const filtersCopy = Object.assign([], filters);
        const index = filters.findIndex((f) => f.value === filter.value);
        filtersCopy[index].isChecked = isChecked;
        setFilters(filtersCopy);
    };

    // Fetch the beers from PUNK API
    const fetchBeers = () => {
        fetch("https://api.punkapi.com/v2/beers?per_page=80")
            .then((response) => response.json())
            .then((data) => setBeers(data))
            .catch((error) => console.log(error));
    };

    // On page load, fetch the beers
    useEffect(() => {
        fetchBeers();
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Digital ML</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header />
            <main>
                <Filter filters={filters} handleChecked={handleChecked} />
                <Main beers={beers} filters={filters} />
            </main>
            <Footer />
        </>
    );
}

export default App;
