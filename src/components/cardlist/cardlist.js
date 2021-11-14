import React from "react";
import Card from "../card/";
import styles from './cardlist.module.scss';

const CardList = (props) => {
    const { beers, filters } = props;
    const checked = filters
        .filter((condition) => condition.isChecked)
        .map((condition) => condition.value);

    const results = beers
        .filter((beer) => (checked.includes("abv") ? beer.abv > 6 : beer))
        .filter((beer) =>
            checked.includes("classic") ? beer.first_brewed.slice(-4) < 2010 : beer
        )
        .filter((beer) => (checked.includes("acidic") ? beer.ph < 4 : beer))
        .map((beer) => <Card key={beer.id} beer={beer} />);

    return <section className={styles.cardList}>{results}</section>;
};

export default CardList;
