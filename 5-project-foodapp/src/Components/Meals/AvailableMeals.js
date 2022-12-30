import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const getMeals = async () => {
            try {
                const res = await axios.get('https://react-foodapp-b526b-default-rtdb.firebaseio.com/meals.json');
                const mealsDB = [];

                for (const key in res.data) {
                    mealsDB.push({
                        id: key,
                        name: res.data[key].name,
                        description: res.data[key].description,
                        price: res.data[key].price,
                    })
                }
                console.log(mealsDB);
                setMeals(mealsDB);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message + '!!!');
                setIsLoading(false);
                setHttpError(error.message);
            }
        }
        getMeals();
    }, []);

    if (isLoading) {
        return (
            <section className={classes.loading}>
                <p>Loading data...</p>
            </section>
        )
    }

    if (httpError) {
        return (
            <Card className={classes.error_message}>
                <p>{httpError}</p>
            </Card>
        )
    }

    const mealsList = meals.map(meal =>
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    )

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;