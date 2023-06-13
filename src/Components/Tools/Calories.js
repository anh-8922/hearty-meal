import React, { useState } from "react";

const proteinCalorieData = {
  fish: 206,
  chicken: 239,
  beef: 250,
  egg: 155,
  lamb: 258,
  seafood: 100,
};

const vegetableCalorieData = {
  peas: 81,
  potatoes: 77,
  lentils: 116,
};

export default function CaloriesSelector() {
    const [selectedFoods, setSelectedFoods] = useState([]);
    const [food, setFood] = useState("");
    const [grams, setGrams] = useState("");
    const [totalCalories, setTotalCalories] = useState(0);

    const handleFoodChange = (e) => {
        setFood(e.target.value);
    };

    const handleGramsChange = (e) => {
        setGrams(e.target.value);
    };

    const addFood = () => {
        if (food.trim() !== "" && grams > 0) {
        let calories = 0;

        if (food in proteinCalorieData) {
            calories = proteinCalorieData[food] * (grams / 100);
        } else if (food in vegetableCalorieData) {
            calories = vegetableCalorieData[food] * (grams / 100);
        }

        const foodItem = {
            food,
            grams: Number(grams),
            calories,
        };

      setSelectedFoods([...selectedFoods, foodItem]);
      setTotalCalories(totalCalories + calories);

      setFood("");
      setGrams("");
        }
    };

    const removeFood = (index) => {
        const updatedFoods = [...selectedFoods];
        const removedFood = updatedFoods.splice(index, 1)[0];
        setTotalCalories(totalCalories - removedFood.calories);
        setSelectedFoods(updatedFoods);
      };
      
      const calculateTotalCalories = () => {
        let total = 0;
        selectedFoods.forEach((item) => {
          total += item.calories;
        });
        return total.toFixed(2);
      };
    
    

    return(
        <>
            <h1>Calories Selector</h1>
            <div>
                <label htmlFor="food">Select a food:</label>
                <select id="food" value={food} onChange={handleFoodChange}>
                    <option value="">-- Select --</option>
                    <optgroup label="Protein">
                        <option value="fish">Fish</option>
                        <option value="chicken">Chicken</option>
                        <option value="beef">Beef</option>
                        <option value="egg">Egg</option>
                        <option value="lamb">Lamb</option>
                        <option value="seafood">Seafood</option>
                    </optgroup>
                    <optgroup label="Vegetable">
                        <option value="peas">Peas</option>
                        <option value="potatoes">Potatoes</option>
                        <option value="lentils">Lentils</option>
                    </optgroup>
                </select>
                <label htmlFor="grams">Grams:</label>
                <input
                type="number"
                id="grams"
                value={grams}
                onChange={handleGramsChange}
                />
                <button onClick={addFood}>Add Food</button>
            </div>
            <div>
                <h2>Selected Foods</h2>
                <ul>
                {selectedFoods.map((item, index) => (
                    <li key={index}>
                    {item.grams}g of {item.food} - {item.calories.toFixed(2)} calories
                    <button onClick={() => removeFood(index)}>Remove</button>
                    </li>
                ))}
                </ul>
                <button onClick={() => setTotalCalories(calculateTotalCalories())}>
                Total Calories
                </button>
                <p>Total Calories: {totalCalories}</p>
            </div>
        </>
    )     

}




 